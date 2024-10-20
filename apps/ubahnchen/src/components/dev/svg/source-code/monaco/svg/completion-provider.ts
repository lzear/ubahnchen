import type * as monaco from 'monaco-editor'

import SvgSchema from './svg-schema.json' assert { type: 'json' }

type ITextModel = monaco.editor.ITextModel
type Position = monaco.Position
type CancellationToken = monaco.CancellationToken
type CompletionItemProvider = monaco.languages.CompletionItemProvider
type HoverProvider = monaco.languages.HoverProvider
type CompletionItem = monaco.languages.CompletionItem

type Monaco = typeof monaco

const isSvgTag = (tagName: string): tagName is keyof typeof SvgSchema =>
  tagName in SvgSchema

function getAreaInfo(text: string) {
  // opening for strings, comments and CDATA
  const items = ['"', "'", '<!--', '<![CDATA[']
  let isCompletionAvailable = true
  // remove all comments, strings and CDATA
  text = text.replaceAll(
    /"([^"\\]*(\\.[^"\\]*)*)"|'([^'\\]*(\\.[^'\\]*)*)'|<!--([\S\s])*?-->|<!\[CDATA\[(.*?)]]>/g,
    '',
  )
  for (const item of items) {
    const itemIdx = text.indexOf(item)
    if (itemIdx > -1) {
      // we are inside one of unavailable areas, so we remove that area
      // from our clear text
      text = text.slice(0, Math.max(0, itemIdx))
      // and the completion is not available
      isCompletionAvailable = false
    }
  }

  // if text is at the end of th tag, drop it
  text = text.replace(/<\/*[A-Za-z-]+$/, '')

  return { isCompletionAvailable, clearedText: text }
}

type Tag = {
  tagName: string
  isAttributeSearch: boolean
}
function getLastOpenedTag(text: string): Tag | undefined {
  // get all tags inside of the content
  const tags = text.match(/<\/*(?=\S*)([A-Za-z-]+)/g)
  if (!tags) return
  // we need to know which tags are closed
  const closingTags = []
  for (let i = tags.length - 1; i >= 0; i--) {
    const tttag = tags[i]
    if (!tttag) throw new Error('No tag found')
    if (tttag.startsWith('</')) closingTags.push(tttag.slice('</'.length))
    else {
      // get the last position of the tag
      const tagPosition = text.lastIndexOf(tttag)
      const tag = tttag.slice('<'.length)
      const closingBracketIdx = text.indexOf('/>', tagPosition)
      // if the tag wasn't closed
      if (closingBracketIdx === -1) {
        // if there are no closing tags or the current tag wasn't closed
        if (closingTags.length === 0 || closingTags.at(-1) !== tag) {
          // we found our tag, but let's get the information if we are looking for
          // a child element or an attribute
          text = text.slice(Math.max(0, tagPosition))
          return {
            tagName: tag,
            isAttributeSearch: text.indexOf('<') > text.indexOf('>'),
          }
        }
        // remove the last closed tag
        closingTags.splice(-1, 1)
      }
      // remove the last checked tag and continue processing the rest of the content
      text = text.slice(0, Math.max(0, tagPosition))
    }
  }
}

function isItemAvailable(
  itemName: string,
  maxOccurs: string,
  items: unknown[],
) {
  // the default for 'maxOccurs' is 1
  maxOccurs = maxOccurs || '1'
  // the element can appear infinite times, so it is available
  if (maxOccurs && maxOccurs === 'unbounded') return true
  // count how many times the element appeared
  let count = 0
  for (const item of items) if (item === itemName) count++
  // if it didn't appear yet, or it can appear again, then it
  // is available, otherwise it't not
  return count === 0 || Number.parseInt(maxOccurs) > count
}

// function findAttributes(elements) {
//   const attrs = []
//   for (const element of elements) {
//     // skip level if it is a 'complexType' tag
//     if (element.tagName === 'complexType') {
//       const child = findAttributes(element.children)
//       if (child) {
//         return child
//       }
//     }
//     // we need only those XSD elements that have a
//     // tag 'attribute'
//     else if (element.tagName === 'attribute') {
//       attrs.push(element)
//     }
//   }
//   return attrs
// }

function getAvailableAttribute(
  monaco: Monaco,
  lastOpenedTag: Tag,
  usedChildTags: string[],
): CompletionItem[] {
  const availableItems: CompletionItem[] = []

  const info =
    !!isSvgTag(lastOpenedTag.tagName) && SvgSchema[lastOpenedTag.tagName]

  // if there are no attributes, then there are no
  // suggestions available
  if (!info || !('attributes' in info) || !info?.attributes) return []
  for (const attribute of info.attributes) {
    // get all attributes for the element
    if (!attribute) throw new Error('No attribute found')

    if (!('maxOccurs' in attribute)) continue

    // accept it in a suggestion list only if it is available
    // @ts-ignore
    if (isItemAvailable(attribute.name, attribute.maxOccurs, usedChildTags)) {
      // mark it as a 'property', and get the documentation
      // @ts-ignore
      availableItems.push({
        label: attribute.name,
        insertText: `${attribute.name}="$\{1\}"`,
        kind: monaco.languages.CompletionItemKind.Property,
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        detail: attribute.detail ?? undefined,
        documentation: {
          value: attribute.description ?? '',
          isTrusted: true,
        },
        // range: {
        //   startLineNumber: 1,
        //   startColumn: 1,
        //   endLineNumber: 1,
        //   endColumn: 1,
        // },
      })
    }
  }
  // return the elements we found
  return availableItems
}

function getAvailableElements(
  monaco: Monaco,
  lastOpenedTag: Tag,
  _usedItems: string[],
): CompletionItem[] {
  const availableItems: CompletionItem[] = []

  const info =
    !!isSvgTag(lastOpenedTag.tagName) && SvgSchema[lastOpenedTag.tagName]

  // if there are no such elements, then there are no suggestions
  if (!info || !('elements' in info) || !info?.elements) return []

  // for (let i = 0; i < info.elements.length; i++) {
  for (const element of info.elements) {
    if (!element) throw new Error('No element found')
    const elementInfo = isSvgTag(element) ? SvgSchema[element] : undefined
    // @ts-ignore
    availableItems.push({
      label: element,
      insertText: `${element}>$\{1\}</${element}`,
      kind: monaco.languages.CompletionItemKind.Class,
      detail: elementInfo?.detail ?? undefined,
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: {
        value: elementInfo?.description ?? '',
        isTrusted: true,
      },
    })
  }

  // return the suggestions we found
  return availableItems
}

// function isAtTheEndOfTag(text: string) {
//   return 0
// }

export function getXmlCompletionProvider(
  monaco: Monaco,
): CompletionItemProvider {
  return {
    triggerCharacters: ['<'],
    provideCompletionItems(model: ITextModel, position: Position) {
      // get editor content before the pointer
      const textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      })
      // get content info - are we inside of the area where we don't want suggestions,
      // what is the content without those areas
      const areaInfo = getAreaInfo(textUntilPosition) // isCompletionAvailable, clearedText
      // if we don't want any suggestions, return empty array
      if (!areaInfo.isCompletionAvailable) return null
      // if we want suggestions, inside of which tag are we?
      const lastOpenedTag = getLastOpenedTag(areaInfo.clearedText)
      // parse the content (not cleared text) into an xml document
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(textUntilPosition, 'text/xml')
      // get opened tags to see what tag we should look for in the XSD schema
      const openedTags = []
      // get the elements/attributes that are already mentioned in the element we're in
      const usedItems = []
      const isAttributeSearch = lastOpenedTag?.isAttributeSearch

      // no need to calculate the position in the XSD schema if we are in the root element
      if (lastOpenedTag) {
        // parse the content (not cleared text) into an xml document
        let lastChild = xmlDoc.lastElementChild
        while (lastChild) {
          openedTags.push(lastChild.tagName)
          // if we found our last opened tag
          if (lastChild.tagName === lastOpenedTag.tagName) {
            // if we are looking for attributes, then used items should
            // be the attributes we already used
            if (lastOpenedTag.isAttributeSearch)
              for (const attr of lastChild.attributes)
                usedItems.push(attr.nodeName)
            // if we are looking for child elements, then used items
            // should be the elements that were already used
            else
              for (const child of lastChild.children)
                usedItems.push(child.tagName)

            break
          }
          // we haven't found the last opened tag yet, so we move to
          // the next element
          lastChild = lastChild.lastElementChild
        }
      }

      const suggestions: CompletionItem[] = lastOpenedTag
        ? isAttributeSearch
          ? getAvailableAttribute(monaco, lastOpenedTag, usedItems)
          : getAvailableElements(monaco, lastOpenedTag, usedItems)
        : []

      return { suggestions }
    },
  }
}

export function getXmlHoverProvider(monaco: Monaco): HoverProvider {
  return {
    provideHover(
      model: ITextModel,
      position: Position,
      _token: CancellationToken,
    ) {
      const wordInfo = model.getWordAtPosition(position)
      if (!wordInfo) return
      const line = model.getLineContent(position.lineNumber)
      if (
        line.slice(wordInfo.startColumn - 2, wordInfo.startColumn - 2 + 1) ==
        '<'
      ) {
        const info = isSvgTag(wordInfo.word) && SvgSchema[wordInfo.word]
        if (info)
          return {
            contents: [
              { value: `**${wordInfo.word}**` },
              { value: info.description ?? '' },
            ].filter(Boolean),
            range: new monaco.Range(
              position.lineNumber,
              wordInfo.startColumn,
              position.lineNumber,
              wordInfo.endColumn,
            ),
          }
      } else {
        const textUntilPosition = model.getValueInRange({
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        })
        const areaInfo = getAreaInfo(textUntilPosition) // isCompletionAvailable, clearedText
        if (areaInfo.isCompletionAvailable) {
          const lastOpenedTag = getLastOpenedTag(areaInfo.clearedText)
          const tagName = lastOpenedTag?.tagName
          const info = !!tagName && isSvgTag(tagName) && SvgSchema[tagName]
          if (info && 'attributes' in info && info?.attributes)
            for (const attribute of info.attributes) {
              if (!attribute) continue
              if (attribute.name === wordInfo.word)
                return {
                  contents: [
                    { value: `**${wordInfo.word}**` },
                    { value: attribute.description ?? '' },
                  ].filter(Boolean),
                  range: new monaco.Range(
                    position.lineNumber,
                    wordInfo.startColumn,
                    position.lineNumber,
                    wordInfo.endColumn,
                  ),
                }
            }
        }
      }
      // return 123
      // throw new Error('Function not implemented.')
    },
  }
}
