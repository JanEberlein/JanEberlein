<script setup>
import { RouterView } from 'vue-router'
import ThemeSelector from '@/components/ThemeSelector.vue'
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <div
    class="flex flex-col space-y-2 p-2 w-screen h-screen bg-gradient-to-b from-white to-zinc-300 dark:from-slate-800 dark:to-zinc-800"
  >
    <header class="flex flex-row h-fit w-full max-w-md self-center">
      <nav class="flex grow space-x-4 overflow-auto p-2">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about/">About</NavItem>
        <NavItem to="/cheatsheet">Cheat Sheet</NavItem>
      </nav>
      <ThemeSelector> </ThemeSelector>
    </header>

    <main class="grow max-w-md self-center w-full p-2">
      <RouterView />
    </main>
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
