<script>
export default {
  name: "LoginPage",
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <AuthButton />
      <p class="text-sm text-center text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
