import type { Diff } from 'diff-match-patch'
import { diff_match_patch as DMP } from 'diff-match-patch'
import type { Patch } from './types'

// 获取比较处理以后的片段
function diff (inputStr: string, outputStr: string): Diff[] {
  const differ = new DMP()
  const diff_main = differ.diff_main(inputStr, outputStr)
  differ.diff_cleanupEfficiency(diff_main)
  return diff_main
}

// 计算节点相关的东西
function calculatePatch (diffs: Diff[]): Patch[] {
  const patches: Patch[] = []
  let index = 0
  for (const diff of diffs) {
    if (diff[0] === 0) {
      index += diff[1].length
      continue
    }
    if (diff[0] === -1) {
      patches.push({
        type: 'remove',
        from: index + diff[1].length,
        length: diff[1].length
      })
    }
    if (diff[0] === 1) {
      patches.push({
        type: 'insert',
        from: index,
        text: diff[1]
      })
      index += diff[1].length
    }
  }
  return patches
}

function applyPatch (inputStr: string, patches: Patch[]): string {
  let outPutStr = inputStr
  for (const patch of patches) {
    if (patch.type === 'insert') {
      outPutStr = outPutStr.slice(0, patch.from) + patch.text + outPutStr.slice(patch.from)
    } else if (patch.type === 'remove') {
      outPutStr = outPutStr.slice(0, patch.from - patch.length) + outPutStr.slice(patch.from)
    }
  }
  return outPutStr
}

export {
  diff,
  calculatePatch,
  applyPatch
}
