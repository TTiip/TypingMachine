import { describe, expect, it } from 'vitest'
import { inputStr, outputStr } from './fixture'
import { calculatePatch, createAnimate, diff } from '~/utils'

describe('animate', () => {
  it('animate', () => {
    const delta = diff(inputStr, outputStr)
    const patches = calculatePatch(delta)
    const animate = createAnimate(inputStr, patches)

    expect([...animate]).toMatchSnapshot()
  })
})
