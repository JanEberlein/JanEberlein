<script setup>
import CardItem from '@/components/CardItem.vue'
import projects from '@/content/projects.json'
import { ref } from 'vue';

const entries = ref([])
entries.value = projects.entries
entries.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//entries.value.reverse()

function backgroundURL(imageName) {
  if(!imageName) return
  const path = `/src/assets/${imageName}`
  const assets = import.meta.glob("/src/assets/*", { eager: true })
  const result = assets[path]
  if (!result) return
  return result.default
}

</script>

<template>
  <div class="h-full w-full flex flex-col space-y-4">
    <CardItem v-for="entry in entries" :key="entry.key" class="h-52 flex flex-col justify-between pb-3" :class="entry.styling">
      <h1 class="text-4xl font-extrabold text-right grow" :style="{backgroundImage: `url('${backgroundURL(entry.backgroundImage)}')`}">{{ entry.title }}</h1>
      <p>{{ entry.description }}</p>
      <p class="text-right text-slate-400">{{ new Date(entry.date).toLocaleDateString('de-DE') }}</p>
    </CardItem>
  </div>
</template>
