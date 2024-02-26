<script setup>
import { computed } from 'vue';

  const props = defineProps({
  backgroundImage: {
    type: String,
    required: false,
    default: ''
  }
})

const backgroundSource = computed(() => {
  if(!props.backgroundImage) return
  const path = `/src/assets/${props.backgroundImage}`
  const assets = import.meta.glob("/src/assets/*", { eager: true })
  const result = assets[path]
  if (!result) return
  return result.default
})
</script>

<template>
  <div class="relative flex flex-col justify-between pb-3 bg-gradient-dotted group min-h-20 w-full box-rounded from-slate-400 overflow-scroll">
    <img v-if="props.backgroundImage" :src="backgroundSource" alt="" 
      class="absolute top-0 left-0 w-full h-full object-cover opacity-15 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
    >
    <slot></slot>
  </div>
</template>
