<script setup>
definePageMeta({
  layout: "dashboard", // corresponds to layouts/dashboard.vue
});
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 gap-6 p-6">
    <!-- Left Column (Feed + Stats) -->
    <div class="xl:col-span-3 flex flex-col gap-6">
      <WidgetWeeklyCalendar />
      <!-- Feed -->
      <section class="">
        <UiDashboardCard title="Travel Log Feed">
          <div class="space-y-4">
            <FeedCard
              username="Sophie"
              location="Tokyo"
              time="2h ago"
              image="/img/tokyo.jpg"
              text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <FeedCard
              username="Luca"
              location="Lisbon"
              time="Yesterday"
              text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </UiDashboardCard>
      </section>

      <!-- Upcoming Trips -->
      <section class="">
        <UiDashboardCard title="Trips & Events">
          <ul class="list bg-base-200 rounded-box shadow-md">
            <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
              Upcoming Trips
            </li>

            <li class="list-row items-start gap-4">
              <div>
                <img class="size-10 rounded-box" src="/img/map-placeholder.webp">
              </div>
              <div>
                <div>Berlin → Krakow</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                  Train • 14th June
                </div>
              </div>
              <p class="list-col-wrap text-xs">
                Scenic 7-hour journey through central Europe. You’ll arrive just in time for the Krakow street music festival.
              </p>
              <button class="btn btn-square btn-ghost">
                <svg
                  class="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z" />
                  </g>
                </svg>
              </button>
              <button class="btn btn-square btn-ghost">
                <svg
                  class="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </g>
                </svg>
              </button>
            </li>

            <li class="list-row items-start gap-4">
              <div>
                <img class="size-10 rounded-box" src="/img/map-placeholder.webp">
              </div>
              <div>
                <div>Nomad Summit – Split</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                  Conference • 21–25 June
                </div>
              </div>
              <p class="list-col-wrap text-xs">
                4 days of networking, workshops, and seaside co-working sessions. Hosted in the heart of Croatia's coast.
              </p>
              <button class="btn btn-square btn-ghost">
                <svg
                  class="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z" />
                  </g>
                </svg>
              </button>
              <button class="btn btn-square btn-ghost">
                <svg
                  class="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </g>
                </svg>
              </button>
            </li>

            <li class="list-row items-start gap-4">
              <div>
                <img class="size-10 rounded-box" src="/img/map-placeholder.webp">
              </div>
              <div>
                <div>Amsterdam Co-Work Week</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                  Remote • July 1–7
                </div>
              </div>
              <p class="list-col-wrap text-xs">
                Spend a week with fellow nomads in a shared flat with daily co-work, boat days, and group cooking.
              </p>
              <button class="btn btn-square btn-ghost">
                <svg
                  class="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z" />
                  </g>
                </svg>
              </button>
              <button class="btn btn-square btn-ghost">
                <svg
                  class="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        </UiDashboardCard>
      </section>
    </div>

    <!-- Right Sidebar -->
    <aside class="flex flex-col gap-6">
      <!-- Map with Spotlight Overlay -->
      <section class="bg-base-300 card shadow-md border border-primary overflow-hidden relative">
        <div class="h-48 w-full bg-base-300 flex items-center justify-center text-sm text-base-content/50 relative">
          <img
            src="/img/map-placeholder.webp"
            class="w-full h-full object-cover"
            alt="map"
          >
          <div class="absolute bottom-0 left-0 w-full pt-2">
            <div class="w-full shadow-lg relative overflow-hidden pt-4">
              <div class="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/60 to-transparent opacity-80 pointer-events-none" />
              <div class="relative z-10 p-2">
                <h3 class="text-sm text-neutral-content font-semibold">
                  Spotlight
                </h3>
                <p class="text-sm text-neutral-content/60">
                  Barcelona, ES — 3 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Widgets -->
      <section class="bg-primary card shadow-md p-4 space-y-3">
        <Widget title="Trips Logged" value="12" />
        <Widget title="Connections" value="27" />
        <Widget title="Photos Uploaded" value="98" />
      </section>

      <WidgetGallery />
    </aside>
  </div>
</template>
