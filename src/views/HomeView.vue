<script setup>
import CardItem from '@/components/CardItem.vue'
import markdownit from 'markdown-it'
import cheatSheet from '@/content/cheatSheet.md?raw'

const md = markdownit()
const result = md.render(cheatSheet)
</script>

<template>
  <main class="flex flex-col space-y-4 pb-4">
    <CardItem class="basis-1">
      <p>Main</p>
    </CardItem>
    
    <CardItem class="basis-9/12">
      <p v-html="result" class=""></p>
    </CardItem>
  </main>
</template>
