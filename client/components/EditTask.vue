<script setup lang="ts">
import type { Task } from "~/types/task";

const props = defineProps<{
  task: Task
}>();

const showModal = ref(false);
const editTask = ref<Task>({
  id: props.task.id,
  title: props.task.title,
  description: props.task.description,
  status: props.task.status,
});

const queryClient = useQueryClient()
// Mutation
const { mutate } = useMutation({
  mutationFn: (task: Task) => GqlUpdateTask(task),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  },
})

const edit = () => {
  showModal.value = false;
  mutate(editTask.value);
}
</script>

<template>
  <button
    class="btn btn-square btn-xs"
    @click="showModal = true"
  >
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
    /><path
      fill="currentColor"
      d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
    /></svg>
  </button>
  <dialog
    class="modal"
    :class="{ 'modal-open': showModal }"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        Edit Task
      </h3>
      <div class="form-control">
        <label class="label">
          Title
        </label>
        <input
          v-model="editTask.title"
          type="text"
          class="input input-bordered"
        >
      </div>
      <div class="form-control">
        <label class="label">
          Description
        </label>
        <textarea
          v-model="editTask.description"
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
          @click="edit"
        >
          Save
        </button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>

</style>