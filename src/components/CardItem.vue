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
  <div class="relative group min-h-20 w-full p-0 box-rounded from-slate-400 overflow-scroll">
    <img v-if="props.backgroundImage" :src="backgroundSource" alt="" 
      class="w-full h-full opacity-20 group-hover:opacity-50 object-cover"
    >
    <div class="absolute flex flex-col justify-between top-0 left-0 w-full h-full p-2 px-4 pb-3 bg-gradient-dotted">
      <slot></slot>
    </div>
  </div>
</template>
