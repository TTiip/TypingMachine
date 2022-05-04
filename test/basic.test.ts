import { describe, expect, it } from 'vitest'
import { applyPatch, calculatePatch, diff } from '~/utils'

const inputStr = `
import { describe, expect, it } from 'vitest'
import { one } from './src'

describe('should', () => {
  it('exported', () => {
    expect(one).toEqual(1)
  })
})
`

const outputStr = `
import { describe, expect, it } from 'vitest'

describe('should', () => {
  it('one', () => {
    expect(one).toEqual(1)
    expect(two).toEqual(2)
  })
})
`

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
