<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <div>
      <textarea id="textarea input" placeholder="please input something..." m-4 h-300px w-500px rounded border-2 p-3 />
      <textarea id="textarea output" placeholder="please input something..." m-4 h-300px w-500px rounded border-2 p-3 />
      <p id="companionMethods" />
    </div>
    <div py-4 />
  </div>
</template>

<script setup lang="ts">
  import { start } from '~/utils'
  onMounted(() => {
    start()
  })
</script>
