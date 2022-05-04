import _TypeIt from 'typeit'
import { calculatePatch, diff } from './patch'

const TypeIt = _TypeIt as any
function start (inputStr: string, outputStr: string) {
  const patches = calculatePatch(diff(inputStr, outputStr))
  const typingEl = document.querySelector('#typing') as HTMLTextAreaElement

  // typingEl!.textContent = inputStr
  // typingEl!.textContent = ''

  // 创造实例 并保存
  let typeit: any = new TypeIt(typingEl, {
    speed: 100,
    waitUntilVisible: true
  })
    // 初始化 显示文本
    .type(inputStr, {
      instant: true,
      delay: 300
    })

  for (const patch of patches) {
    // 每个任务开始之前暂停 200ms
    typeit
      .pause(200)

    if (patch.type === 'insert') {
      // 先将光标移动到开始的位置，在讲光标移动到删除的位置。
      // 目前 分析是只能得出相对开始的位置。
      // instant 表示立即放置光标到指定位置
      // delay 表示完成之后延迟多久 执行下一步
      typeit
        .move(null, {
          to: 'START',
          instant: true
        })
        .move(patch.from, { instant: true })
        .type(patch.text, { delay: 500 })
    } else if (patch.type === 'remove') {
      // 逻辑同上。
      typeit
        .move(null, {
          to: 'START',
          instant: true
        })
        .move(patch.from, { instant: true })
        .delete(patch.length)
    }
  }
  // 运行 打字机
  typeit.go()
}
export {
  start
}
