<script setup lang="ts">
import { TaskStatus } from "~/types/task";
import type { Task } from "~/types/task";

const statuses = Object.values(TaskStatus) as TaskStatus[];

const queryClient = useQueryClient()
// Query
const { isLoading, data } = useQuery({
  queryKey: ['tasks'],
  queryFn: () => GqlTasks(),
})

// Mutation
const { mutate } = useMutation({
  mutationFn: (task: Task) => GqlCreateTask(task),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  },
})

provide<(task: Task) => void>("addTask", addTask);

async function addTask(task: Task) {
  mutate(task)
}
</script>

<template>
  <div
    v-if="!isLoading"
    class="grid grid-cols-3 gap-8 h-full w-full"
  >
    <TaskList
      v-for="status in statuses"
      :key="status"
      :status="status"
      :tasks="data.tasks"
    />
  </div>
</template>

<style scoped>

</style>