import type { Patch } from '~/utils'

function* createAnimate (inputStr: string, patches: Patch[]) {
  let outPutStr = inputStr
  let cursor = 0
  for (const patch of patches) {
    if (patch.type === 'insert') {
      cursor = patch.from
      const head = outPutStr.slice(0, patch.from)
      const tail = outPutStr.slice(patch.from)
      let selection = ''

      for (const char of patch.text) {
        selection += char
        yield {
          cursor: cursor + selection.length,
          outPutStr: head + patch.text + tail
        }
      }
    } else if (patch.type === 'remove') {
      cursor = patch.from - patch.length
      const head = outPutStr.slice(0, patch.from - patch.length)
      const tail = outPutStr.slice(patch.from)
      let selection = outPutStr.slice(patch.from - patch.length, patch.from)

      for (let i = selection.length - 1; i >= 0; i--) {
        yield {
          cursor: cursor + i,
          outPutStr: head + selection.slice(0, i) + tail
        }
      }
    }
  }
  return outPutStr
}

export {
  createAnimate
}
