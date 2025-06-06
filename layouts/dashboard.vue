<template>
  <div class="min-h-screen bg-base-200 text-base-content flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-base-100 border-r border-base-300 hidden md:block">
      <div class="p-4 font-bold text-lg">
        Nomio Dashboard
      </div>
      <ul class="menu p-4">
        <li><a>📍 Overview</a></li>
        <li><a>🧳 Trips</a></li>
        <li><a>🧑‍🤝‍🧑 Contacts</a></li>
        <li><a>⚙️ Settings</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
