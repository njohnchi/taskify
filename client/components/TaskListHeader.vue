<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card-title justify-between items-center">
    <h2 class="text-neutral-content">
      {{ title }}
    </h2>
    <div class="card-actions">
      <NewTask />
    </div>
  </div>
</template>

<style scoped>

</style>