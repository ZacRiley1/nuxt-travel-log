<script>
export default {
  name: "LoginPage",
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">
        Login
      </h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full input input-bordered"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            class="w-full input input-bordered"
          >
        </div>
        <button class="w-full btn btn-primary">
          Login
        </button>
      </form>
      <p class="text-sm text-center text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
