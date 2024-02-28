<script setup lang="ts">
import { TaskStatus } from "~/types/task";
import type { Task } from "~/types/task";

const { token  } = useAuth()
const statuses = Object.values(TaskStatus) as TaskStatus[];
const { data: tasks } = await useFetch('/api/tasks/', {
  headers: {
    Authorization: `${token.value}`
  }
})

provide<(task: Task) => void>("addTask", addTask);

async function addTask(task: Task) {
  try{
    const res = await $fetch("api/tasks/store", {
      headers: {
        Authorization: `${token.value}`
      },
      method: "POST",
      body: JSON.stringify(task)
    });
    tasks.value.push(res);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="grid grid-cols-3 gap-8 h-full w-full">
    <TaskList
      v-for="status in statuses"
      :key="status"
      :status="status"
      :tasks="tasks as Task[]"
    />
  </div>
</template>

<style scoped>

</style>