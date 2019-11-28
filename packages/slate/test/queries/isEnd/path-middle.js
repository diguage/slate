/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>
      on
      <cursor />e
    </block>
  </editor>
)

export const run = editor => {
  const { anchor } = editor.selection
  return Editor.isEnd(editor, anchor, [0])
}

export const output = false