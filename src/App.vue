<script setup>
import { RouterView } from 'vue-router'
import ThemeSelector from '@/components/ThemeSelector.vue'
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <div
    class="flex flex-col space-y-2 
      p-2 w-screen h-screen 
      bg-gradient-to-b from-white from-50% to-amber-50 dark:from-slate-800 dark:to-zinc-800 dark:from-0%
      text-slate-800 dark:text-white
    "
  >
    <header class="flex flex-row h-fit w-full max-w-2xl self-center">
      <nav class="flex grow space-x-4 overflow-scroll p-2">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects/">My Projects</NavItem>
        <NavItem to="/cheatsheet/">Cheat Sheet</NavItem>
      </nav>
      <ThemeSelector class="self-center"> </ThemeSelector>
    </header>

    <main class="grow max-w-2xl self-center w-full p-2 overflow-scroll">
      <RouterView />
    </main>
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
