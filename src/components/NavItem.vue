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
  <div class="box-rounded m-2">
    <RouterLink :to="props.to"><slot></slot></RouterLink>
  </div>
</template>