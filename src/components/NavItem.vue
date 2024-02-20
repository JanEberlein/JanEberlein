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
    <RouterLink :to="props.to"><slot></slot></RouterLink>
  </div>
</template>
