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
  <div class="box-rounded">
    <RouterLink :to="props.to" class="truncate"><slot></slot></RouterLink>
  </div>
</template>
