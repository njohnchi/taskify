<script setup lang="ts">
import type { Task } from "~/types/task";
import EditTask from "~/components/EditTask.vue";

defineProps<{
  task: Task
}>();

</script>

<template>
  <EditTask :task="task">
    <div class="card bg-base-100 shadow-xl mb-2">
      <div class="card-body">
        <div class="flex justify-between items-center">
          <h3>{{ task.title }}</h3>
          <div class="card-actions">
            <DeleteTask :id="task.id" />
          </div>
        </div>
        <p class="text-xs text-gray-400">
          {{ task.description }}
        </p>
      </div>
    </div>
  </EditTask>
</template>

<style scoped>

</style>