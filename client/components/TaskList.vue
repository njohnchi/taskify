<script setup lang="ts">

import TaskListHeader from "~/components/TaskListHeader.vue";
import TheTask from "~/components/TheTask.vue";
</script>

<template>
  <div class="card card-compact bg-primary text-primary-content">
    <div class="card-body">
      <TaskListHeader />
      <div class="h-96 overflow-y-auto">
        <TheTask />
        <TheTask />
        <TheTask />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>