<script setup>
import CardItem from '@/components/CardItem.vue'
import markdownit from 'markdown-it'
import cheatSheet from '@/content/cheatSheet.md?raw'

const md = markdownit()
const result = md.render(cheatSheet)
</script>

<template>
  <div class="h-full flex flex-col space-y-4">
    <CardItem class="grow bg-none p-0">
      <p v-html="result" class="prose prose-amber dark:prose-invert max-w-full bg-gradient-dotted p-4"></p>
    </CardItem>
  </div>
</template>
