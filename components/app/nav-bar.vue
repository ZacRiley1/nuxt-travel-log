<template>
  <nav class="navbar fixed top-0 left-0 z-50 bg-base-200 text-base-content min-h-10">
    <div class="navbar-start">
      <!-- Mobile Dropdown -->
      <div class="dropdown">
        <button
          tabindex="0"
          class="btn btn-ghost lg:hidden"
          aria-label="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white/10 backdrop-blur-md rounded-box w-52 text-base-content"
        >
          <!-- <li><a>Features</a></li>
          <li><a>Screenshots</a></li>
          <li><a>About</a></li> -->
        </ul>
      </div>

      <!-- Logo -->
      <NuxtLink to="/" class="btn btn-ghost normal-case text-lg text-base-content gap-2">
        <Icon name="tabler:world" class="w-5 h-5" />
        Nomio
      </NuxtLink>
    </div>

    <!-- Desktop Nav -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><a href="#features">Features</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#about">About</a></li> -->
      </ul>
    </div>

    <!-- Right Side Login -->
    <div class="navbar-end">
      <AppThemeToggle class="mr-4" />
      <AuthButton />
    </div>
  </nav>
</template>
