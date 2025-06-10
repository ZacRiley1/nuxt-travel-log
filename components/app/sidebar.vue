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
    class="fixed left-0 top-0 h-screen bg-base-200 border-r border-primary hidden md:flex flex-col justify-between z-50"
    :class="sidebar.isOpen ? 'w-52' : 'w-12'"
  >
    <div>
      <div class="flex w-full items-center border-b border-base-300 relative" :class="sidebar.isOpen ? 'flex-row ps-2 justify-start' : 'flex-col p-2 justify-center'">
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
      <ul :class="sidebar.isOpen ? 'menu flex flex-col gap-2 p-4 w-full' : 'menu mt-4 flex flex-col items-center justify-center gap-3 p-0 w-full'">
        <div
          v-for="(link, id) in links"
          :key="id"
          class="flex flex-col tooltip tooltip-right"
          :data-tip="sidebar.isOpen ? '' : link.text"
        >
          <NuxtLink
            v-if="link.type === 'link'"
            :to="link.to"
            class="btn btn-ghost justify-start text-primary-content hover:bg-base300/60"
            :class="[sidebar.isOpen ? 'w-full' : 'p-3', route.path === link.to ? 'bg-base-300/60' : '']"
            active-class="bg-base-300/60"
          >
            <Icon
              :name="link.icon"
              class="w-5 h-5"
            />
            <span v-if="sidebar.isOpen">{{ link.text }}</span>
          </NuxtLink>
          <li
            v-if="link.type === 'group' && sidebar.isOpen"
            :to="link.to"
            class="flex flex-col justify-start text-primary-content hover:bg-base300/60"
            :class="[sidebar.isOpen ? 'w-full' : 'p-3', route.path === link.to ? 'bg-base-300/60' : '']"
            active-class="bg-base-300/60"
          >
            <div class="btn btn-ghost justify-start text-primary-content hover:bg-base300/60">
              <Icon
                :name="link.icon"
                class="w-5 h-5"
              /><span v-if="sidebar.isOpen">{{ link.text }}</span>
            </div>
            <ul
              v-for="(subLink, subId) in link.data"
              :key="subId"
            >
              <NuxtLink

                :to="subLink.to"
                class="btn btn-ghost justify-start text-primary-content hover:bg-base300/60"
                :class="[sidebar.isOpen ? 'w-full' : 'p-3', route.path === subLink.to ? 'bg-base-300/60' : '']"
                active-class="bg-base-300/60"
              >
                <Icon
                  :name="subLink.icon"
                  class="w-5 h-5"
                />
                <span v-if="sidebar.isOpen">{{ subLink.text }}</span>
              </NuxtLink>
            </ul>
          </li>
          <div
            v-else-if="link.type === 'group' && !sidebar.isOpen"
            :to="link.to"
            class="flex flex-col justify-start text-primary-content gap-3 hover:bg-base300/60 tooltip tooltip-right"
            :data-tip="sidebar.isOpen ? '' : link.text"
            :class="[sidebar.isOpen ? 'w-full' : 'gap-2', route.path === link.to ? 'bg-base-300/60' : '']"
            active-class="bg-base-300/60"
          >
            <NuxtLink
              v-for="(subLink, subId) in link.data"
              :key="subId"
              :to="subLink.to"
              class="btn btn-ghost justify-start text-primary-content hover:bg-base300/60"
              :class="[sidebar.isOpen ? 'w-full' : 'p-3', route.path === subLink.to ? 'bg-base-300/60' : '']"
              active-class="bg-base-300/60"
            >
              <Icon
                :name="subLink.icon"
                class="w-5 h-5"
              />
              <span v-if="sidebar.isOpen">{{ subLink.text }}</span>
            </NuxtLink>
          </div>
        </div>
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

</style>
