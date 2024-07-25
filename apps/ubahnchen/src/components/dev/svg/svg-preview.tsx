import * as fs from 'node:fs'
import * as path from 'node:path'

import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import Image from 'next/image'

import 'server-only'

import { Pinch } from '../client/pinch'

import { svgExamplesFolder } from './consts'

import 'highlight.js/styles/atom-one-dark.css'

// Then register the languages you need
hljs.registerLanguage('xml', xml)

type Props = {
  file: string
}

export const SvgPreview = async ({ file }: Props) => {
  return (
    <div>
      <Pinch>
        <Image src={`/svg/${file}`} alt="svg" width={400} height={400} />
      </Pinch>
    </div>
  )
}
