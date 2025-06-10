<script setup lang="ts">
const sidebar = useControlBarStore();
const route = useRoute();

const links = [
  { type: "link", icon: "tabler:home", text: "Home", to: "/dashboard" },
  { type: "group", icon: "tabler:map", text: "Locations", data: [
    { type: "link", icon: "tabler:map-pin-2", text: "All Locations", to: "/dashboard/locations" },
    { type: "link", icon: "tabler:map-pin-filled", text: "My Locations", to: "/dashboard/locations/my-locations" },
    { type: "link", icon: "tabler:map-pin-plus", text: "Add Location", to: "/dashboard/locations/add-location" },
  ] },
  { type: "link", icon: "solar:gallery-minimalistic-bold", text: "Gallery", to: "/dashboard/gallery" },
];
</script>

<template>
  <aside
    class="fixed left-0 top-0 h-screen bg-base-200 border-r border-primary hidden md:flex flex-col justify-between z-50 sidebar-swap"
    :class="sidebar.isOpen ? 'w-52' : 'w-12'"
  >
    <div>
      <Transition
        v-if="sidebar.isOpen"
        name="swap"
        mode="out-in"
      >
        <div
          v-if="sidebar.isOpen"
          class="flex w-full items-center border-b border-base-300 relative"
          :class="sidebar.isOpen ? 'flex-row ps-2 justify-start' : 'flex-col p-2 justify-center'"
        >
          <Icon
            name="solar:alt-arrow-left-bold-duotone"
            class="w-6 h-6 text-base-content cursor-pointer hover:text-secondary transition-transform duration-300"
            :class="!sidebar.isOpen ? 'rotate-180 absolute left-12 top-0' : ''"
            @click="sidebar.toggleOpen()"
          />
          <UserLocation
            v-if="sidebar.isOpen"
            username="Isaac R"
            location="Liverpool, GB"
          />
          <div v-else class="flex-1 text-center">
            <AuthButton />
          </div>
        </div>
      </Transition>
      <div
        v-else
        class="flex w-full items-center border-b border-base-300 relative"
        :class="sidebar.isOpen ? 'flex-row ps-2 justify-start' : 'flex-col p-2 justify-center'"
      >
        <Icon
          name="solar:alt-arrow-left-bold-duotone"
          class="w-6 h-6 text-base-content cursor-pointer hover:text-secondary transition-transform duration-300"
          :class="!sidebar.isOpen ? 'rotate-180 absolute left-12 top-0' : ''"
          @click="sidebar.toggleOpen()"
        />
        <div class="flex-1 text-center">
          <AuthButton />
        </div>
      </div>
      <ul :class="sidebar.isOpen ? 'menu flex flex-col gap-2 p-4 w-full overflow-hidden' : 'menu mt-4 flex flex-col items-center justify-center gap-3 p-0 w-full'">
        <template v-for="(link, id) in links" :key="id">
          <SidebarButton
            v-if="link.type === 'link'"
            :link="link"
            :sidebar-is-open="sidebar.isOpen"
            :route-path="route.path"
          />
          <div v-if="link.type === 'group'">
            <div v-if="sidebar.isOpen" class="flex flex-col justify-start text-primary-content">
              <!-- <div class="justify-start text-primary-content hover:bg-base-200">
                <Icon :name="link.icon" class="w-5 h-5" />
                <span class="text-xs"> {{ link.text }}</span>
              </div> -->
              <ul>
                <SidebarButton
                  v-for="(subLink, subId) in link.data"
                  :key="subId"
                  :link="subLink"
                  :sidebar-is-open="sidebar.isOpen"
                  :route-path="route.path"
                />
              </ul>
            </div>
            <ul v-else class="flex flex-col justify-start text-primary-content gap-3 border-y border-base-100">
              <SidebarButton
                v-for="(subLink, subId) in link.data"
                :key="subId"
                :link="subLink"
                :sidebar-is-open="sidebar.isOpen"
                :route-path="route.path"
              />
            </ul>
          </div>
        </template>
      </ul>
    </div>

    <NuxtLink
      to="/"
      class="btn btn-ghost normal-case text-lg text-primary-content"
      :class="sidebar.isOpen ? 'm-6' : 'btn-xs mb-2 self-end mx-auto'"
    >
      <Icon name="tabler:world" class="w-5 h-5" />
      <span v-if="sidebar.isOpen">Nomio</span>
    </NuxtLink>
  </aside>

  <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-base-300 border-t border-primary z-50 flex justify-around py-3">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="flex flex-col items-center text-md"
    >
      <Icon :name="link.icon" class="w-5 h-5" />
    </NuxtLink>
  </nav>
</template>

<style scoped>
.swap-enter-active,
.swap-leave-active {
  animation: card-fade-slide 0.3s;
  transition:
    height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s;
  overflow: hidden;
}
.swap-enter-from,
.swap-leave-to {
  opacity: 0;
  max-height: 42px; /* collapsed height, adjust as needed */
}
.swap-enter-to,
.swap-leave-from {
  opacity: 1;
  max-height: 42px; /* expanded height, adjust as needed */
}

@keyframes card-fade-slide {
  0% {
    opacity: 0;
    height: 42px;
  }
  50% {
    height: 42px;
  }
  100% {
    opacity: 0.5;
    height: 42px;
  }
}
</style>
