<script setup lang="ts">
import TaskListHeader from "~/components/TaskListHeader.vue";
import TheTask from "~/components/TaskListItem.vue";
import { TaskStatus } from "~/types/task";
import type { Task } from "~/types/task";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";

const props = defineProps<{
  status: TaskStatus,
  tasks: Task[]
}>();

console.log('rerender');

provide<TaskStatus>("status", props.status);

const taskList = computed(() => {
  return props.tasks.filter(task => task.status === props.status);
});

const [listRef, list] = useDragAndDrop(taskList.value, { group: "tasksList", name: props.status, handleEnd: handleDrop});

const queryClient = useQueryClient()
// Mutation
const { mutate } = useMutation({
  mutationFn: (task: Task) => GqlUpdateTask(task),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  },
})

function handleDrop(data) {
  const task = data.targetData.node.data.value;
  const status = data.targetData.parent.data.config.name;

  if (task.status !== status) {
    mutate({ ...task, status });
  }
}
</script>

<template>
  <div class="card card-compact bg-neutral">
    <div class="card-body">
      <TaskListHeader :title="status" />
      <div
        ref="listRef"
        class="h-96 overflow-y-auto"
      >
        <TheTask
          v-for="task in list"
          :key="task.id"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>