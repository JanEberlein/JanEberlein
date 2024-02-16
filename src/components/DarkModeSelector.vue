<script setup>
import { useDark, useToggle } from '@vueuse/core'


const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <button @click="toggleDark()">Dark Mode</button>
  </div>
</template>
