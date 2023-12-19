<script setup lang="ts">
import { TaskStatus } from "~/types/task";

const statuses: TaskStatus[] = Object.values(TaskStatus);

</script>

<template>
  <div class="grid grid-cols-3 gap-8 h-full w-full">
    <TaskList
      v-for="status in statuses"
      :key="status"
      :status="status"
    />
  </div>
</template>

<style scoped>

</style>