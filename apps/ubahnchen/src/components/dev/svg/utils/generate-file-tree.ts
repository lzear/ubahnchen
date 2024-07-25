import fs from 'node:fs'
import path from 'node:path'

type El = {
  id: string
  name: string
  children?: El[]
}

function getTreeViewElement(dirPath: string, idCounter = { value: 1 }) {
  const stats = fs.statSync(dirPath)
  const basename = path.basename(dirPath)
  const element: El = {
    id: idCounter.value.toString(),
    name: basename,
  }

  if (stats.isDirectory()) {
    element.children = []
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      idCounter.value++
      const childPath = path.join(dirPath, file)
      element.children.push(getTreeViewElement(childPath, idCounter))
    }
  }

  return element
}

function generateTreeView(rootPath: string) {
  const idCounter = { value: 1 }
  const elements = []

  const files = fs.readdirSync(rootPath)
  for (const file of files) {
    const fullPath = path.join(rootPath, file)
    elements.push(getTreeViewElement(fullPath, idCounter))
  }

  return elements
}
