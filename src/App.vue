<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DarkModeSelector from '@/components/DarkModeSelector.vue'
</script> 

<template>
  <div
    class="w-screen h-screen bg-gradient-to-b from-slate-200 to-zinc-200 dark:from-slate-800 dark:to-zinc-800"
  >
    <header class="flex h-10 max-w-md w-full">
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <DarkModeSelector> </DarkModeSelector>



    <RouterView />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
