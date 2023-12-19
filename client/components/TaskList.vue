<script setup lang="ts">
import TaskListHeader from "~/components/TaskListHeader.vue";
import TheTask from "~/components/TaskListItem.vue";
import { TaskStatus } from "~/types/task";
import type { Task } from "~/types/task";

const props = defineProps<{
  status: TaskStatus,
  tasks: Task[]
}>();

provide<TaskStatus>("status", props.status);

const taskList = computed(() => {
  return props.tasks.filter(task => task.status === props.status);
});

</script>

<template>
  <div class="card card-compact bg-primary text-primary-content">
    <div class="card-body">
      <TaskListHeader :title="status" />
      <div class="h-96 overflow-y-auto">
        <TheTask
          v-for="task in taskList"
          :key="task.id"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>