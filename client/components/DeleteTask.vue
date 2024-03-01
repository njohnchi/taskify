<script setup lang="ts">
defineProps<{
  id: number
}>();

const queryClient = useQueryClient()
// Mutation
const { mutate } = useMutation({
  mutationFn: (id: number) => GqlDeleteTask({ id: id }),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  },
})
</script>

<template>
  <button
    class="btn btn-square btn-xs"
    @click="mutate(id)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    /></svg>
  </button>
</template>

<style scoped>

</style>