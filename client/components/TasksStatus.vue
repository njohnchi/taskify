<script setup lang="ts">
import { TaskStatus } from "~/types/task";
import type { Task } from "~/types/task";

const statuses: TaskStatus[] = Object.values(TaskStatus);
const tasks = ref<Task[]>([]);

provide<(task: Task) => void>("addTask", addTask);

function addTask(task: Task) {
  tasks.value.push(task);
}
</script>

<template>
  <div class="grid grid-cols-3 gap-8 h-full w-full">
    <TaskList
      v-for="status in statuses"
      :key="status"
      :status="status"
      :tasks="tasks"
    />
  </div>
</template>

<style scoped>

</style>