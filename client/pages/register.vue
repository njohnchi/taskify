<script setup lang="ts">
const { status, data, signIn,  } = useAuth()
const register = async (fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  alert(JSON.stringify(fields))
};
</script>

<template>
  <div class="card bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">
        Register
      </h2>
      <FormKit
        type="form"
        submit-label="Register"
        @submit="register"
      >
        <FormKit
          id="name"
          type="text"
          name="name"
          validation="required"
          label="Name"
        />
        <FormKit
          id="email"
          type="email"
          name="email"
          validation="required|email"
          label="Email"
        />
        <FormKit
          id="password"
          type="password"
          name="password"
          validation="required"
          label="Password"
        />
      </FormKit>
    </div>
  </div>
</template>

<style scoped>

</style>