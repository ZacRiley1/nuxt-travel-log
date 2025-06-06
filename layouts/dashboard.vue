<template>
  <div class="min-h-screen bg-base-200 text-base-content flex">
    <!-- Sidebar -->
    <aside class=" relative w-64 bg-base-100 border-r border-base-300 hidden md:block">
      <div class="p-4 font-bold text-lg">
        Nomio Dashboard
      </div>
      <AuthButton class="absolute m-4 top-0 end-0" />
      <ul class="menu p-4">
        <li><a>📍 Overview</a></li>
        <li><a>🧳 Trips</a></li>
        <li><a>🧑‍🤝‍🧑 Contacts</a></li>
        <li><a>⚙️ Settings</a></li>
      </ul>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-lg text-base-content absolute bottom-0 left-0 p-2 m-4">
        <Icon name="tabler:world" class="w-5 h-5" />
        Nomio
      </NuxtLink>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
