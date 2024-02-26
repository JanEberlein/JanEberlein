<script setup>
import CardItem from '@/components/CardItem.vue'
import projects from '@/content/projects.json'
import { ref } from 'vue';

const entries = ref([])
entries.value = projects.entries
entries.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//entries.value.reverse()



</script>

<template>
  <div class="h-full w-full flex flex-col space-y-4">
    <CardItem v-for="entry in entries" :key="entry.key" :background-image="entry.backgroundImage" class="h-52">
      <h1 class="text-4xl font-extrabold text-right grow">
        {{ entry.title }}
      </h1>
      <p>{{ entry.description }}</p>
      <p class="text-right text-slate-400">{{ new Date(entry.date).toLocaleDateString('de-DE') }}</p>
    </CardItem>
  </div>
</template>
