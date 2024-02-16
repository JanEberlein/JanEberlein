<script setup>
import { useDark } from '@vueuse/core'
import { ref } from 'vue';

const isDark = useDark()
const dark = ref(isDark.value)

function toggle() {
  dark.value = !dark.value
  isDark.value = dark.value
}
</script>

<template>
  <button @click="toggle()" class="relative w-18 h-min px-2.5 m-2">
    <div class="flex flex-col justify-between rounded-full border-slate-800 border-2 bg-white h-fit px-0.5 w-16">
      <Transition
        enter-from-class=" opacity-0 translate-x-8"
        enter-active-class="transform duration-700 linear"
        leave-active-class="transform duration-700 linear absolute"
        leave-to-class="opacity-0 translate-x-8"
      >
        <span v-if="!dark" class="self-start text-lg">☀️</span>
      </Transition>
      <Transition
        enter-from-class=" opacity-0 -translate-x-8"
        enter-active-class="transform duration-700 linear"
        leave-active-class="transform duration-700 linear absolute"
        leave-to-class="opacity-0 -translate-x-8"
      >
        <span v-if="dark" class="self-end text-lg dur">🌒</span>
      </Transition>
    </div>
  </button>
</template>

