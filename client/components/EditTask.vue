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
  <div
    class="cursor-pointer"
    @click="showModal = true"
  >
    <slot />
  </div>
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