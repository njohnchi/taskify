<script setup lang="ts">
import { TaskStatus } from "~/types/task";

const statuses = Object.values(TaskStatus) as TaskStatus[];
// Query
const { isLoading, isError, data: tasks } = useQuery({
  queryKey: ['tasks'],
  queryFn: () => GqlTasks(),
  select: (data) => {
    return data.tasks
  }
})
</script>

<template>
  <div
    v-if="isLoading"
    class="flex justify-center items-center h-full w-full"
  >
    <h1 class="text-3xl">
      Loading....
    </h1>
  </div>

  <div
    v-if="!isLoading && !isError"
    :key="tasks"
    class="grid grid-cols-3 gap-8 h-full w-full"
  >
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