import TypeIt from 'typeit'
// import { applyPatch, calculatePatch, diff } from './util'

function start () {
  new TypeIt('#companionMethods', {
    speed: 50,
    waitUntilVisible: true
  })
    .type('Nvver', { delay: 300 })
    .move(-3)
    .delete(1)
    .type('e')
    .move(null, { to: 'END' })
    .type(' let yees')
    .pause(300)
    .delete(2)
    .type('sterday use up to muc')
    .move(-4)
    .type('o')
    .move(null, { to: 'END' })
    .type('h of today.')
    .pause(500)
    .break({ delay: 500 })
    .break({ delay: 500 })
    .type('<em>- Will Rogers</em>')
    .go()
}
export {
  start
}
