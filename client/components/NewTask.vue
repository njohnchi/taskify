<script setup lang="ts">
const showModal = ref(false);

const createTask = () => {
  showModal.value = false;
}
</script>

<template>
  <!-- Open the modal using ID.showModal() method -->
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
          type="text"
          class="input input-bordered"
        >
      </div>
      <div class="form-control">
        <label class="label">
          Description
        </label>
        <textarea
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