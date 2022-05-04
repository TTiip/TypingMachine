import { createAnimate } from './animate'
import { calculatePatch, diff } from './patch'

const typingEl = document.querySelector('#typing') as HTMLTextAreaElement

function sleep (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function start (inputStr: string, outputStr: string) {
  let _inputStr = inputStr
  const patches = calculatePatch(diff(_inputStr, outputStr))
  const animate = createAnimate(_inputStr, patches)

  for (const result of animate) {
    typingEl.textContent = result.outPutStr
    await sleep(Math.random() * 100)
  }
}
export {
  start
}
