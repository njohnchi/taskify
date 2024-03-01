<script setup lang="ts">
import type { Task } from "~/types/task";
import { TaskStatus } from "~/types/task";

const status = inject<TaskStatus>("status", TaskStatus.PENDING);
const showModal = ref(false);
const task = ref<Task>({
  id: parseInt(Math.random().toString(36).substr(2, 9),),
  title: "",
  description: "",
  status: status,
});

const queryClient = useQueryClient()
// Mutation
const { mutate } = useMutation({
  mutationFn: (task: Task) => GqlCreateTask(task),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  },
})

const createTask = () => {
  showModal.value = false;
  mutate(task.value);
  task.value = {
    id: parseInt(Math.random().toString(36).substr(2, 9),),
    title: "",
    description: "",
    status: status,
  };
}
</script>

<template>
  <button
    class="btn btn-sm text-xs"
    @click="showModal = true"
  >
    New
  </button>
  <dialog
    class="modal"
    :class="{ 'modal-open': showModal }"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        New Task
      </h3>
      <div class="form-control">
        <label class="label">
          Title
        </label>
        <input
          v-model="task.title"
          type="text"
          class="input input-bordered"
        >
      </div>
      <div class="form-control">
        <label class="label">
          Description
        </label>
        <textarea
          v-model="task.description"
          class="textarea h-24 textarea-bordered textarea-accent"
        />
      </div>
      <div class="modal-action">
        <button
          class="btn btn-sm text-xs"
          @click="showModal = false"
        >
          Close
        </button>
        <button
          class="btn btn-sm btn-primary text-xs"
          @click="createTask"
        >
          Save
        </button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>

</style>