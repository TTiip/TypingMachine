<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <div>
      <pre id="typing" font-mono text-left h-400px mx-auto w-800px />
      <textarea id="input" v-model="inputStr" placeholder="please input something..." font-mono m-4 h-400px w-700px rounded border-2 p-3 border-coolGray />
      <textarea id="output" v-model="outputStr" placeholder="please input something..." font-mono m-4 h-400px w-700px rounded border-2 p-3 border-coolGray />
      <div mt-4 mb-10>
        <button class="btn" @click="typeHandler">
          Typing
        </button>
      </div>
    </div>
    <div py-4 />
  </div>
</template>

<script setup lang="ts">
  import { start } from '~/utils'

  const inputStr = $ref(`
    import { describe, expect, it } from 'vitest'
    import { one } from './src'

    describe('should', () => {
      it('exported', () => {
        expect(one).toEqual(1)
      })
    })
	`)

  const outputStr = $ref(`
    import { describe, expect, it } from 'vitest'

    describe('should', () => {
      it('one', () => {
        expect(one).toEqual(1)
        expect(two).toEqual(2)
      })
    })
    it('two', () => {
      expect(1 + 1).toEqual(2)
      expect(two).not.toBe(3)
    })
	`)
  const typeHandler = () => {
    const typingEl = document.getElementById('typing') as HTMLPreElement
    typingEl.textContent = ''
    start(inputStr, outputStr)
  }
</script>
