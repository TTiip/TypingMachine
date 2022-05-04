import { describe, expect, it } from 'vitest'
import { inputStr, outputStr } from './fixture'
import { applyPatch, calculatePatch, diff } from '~/utils'

describe('base test', () => {
  it('exported', () => {
    const delta = diff(inputStr, outputStr)
    const patches = calculatePatch(delta)
    const applyPatches = applyPatch(inputStr, patches)

    expect(delta).toMatchSnapshot('delta')
    expect(patches).toMatchSnapshot('patches')
    expect(applyPatches).toMatchSnapshot('applyPatches')
    expect(applyPatches).toEqual(outputStr)
  })
})
