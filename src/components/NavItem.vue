<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
    default: '/'
  }
})

</script>

<template>
  <div class="p-2 m-2 rounded-md ring-2 ring-transparent active:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-700">
    <RouterLink :to="props.to" class="px-2"><slot></slot></RouterLink>
  </div>
</template>