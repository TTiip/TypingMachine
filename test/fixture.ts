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

export {
  inputStr,
  outputStr
}
