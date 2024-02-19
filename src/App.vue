<script setup>
import { RouterView } from 'vue-router'
import ThemeSelector from '@/components/ThemeSelector.vue'
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <div
    class="flex flex-col p-2 w-screen h-screen bg-gradient-to-b from-white to-zinc-300 dark:from-slate-800 dark:to-zinc-800"
  >
    <header class="flex flex-row h-fit max-w-md w-full">
      <nav class="flex grow overflow-scroll">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about/">About</NavItem>
      </nav>
      <ThemeSelector> </ThemeSelector>
    </header>

    <main class="m-2">
      <RouterView />
    </main>
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
