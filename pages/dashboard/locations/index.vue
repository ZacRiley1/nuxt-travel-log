<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const previousRoute = useState<string | null>("previousRoute");

const showAddModal = ref(false);

let delayTimeout: ReturnType<typeof setTimeout> | null = null;

watch(
  () => route.query.add,
  (val) => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
      delayTimeout = null;
    }

    if (val === "true") {
      const cameFromAnotherRoute
        = previousRoute.value && previousRoute.value.split("?")[0] !== route.path;

      if (cameFromAnotherRoute) {
        delayTimeout = setTimeout(() => {
          showAddModal.value = true;
        }, 250);
      }
      else {
        showAddModal.value = true;
      }
    }
    else {
      showAddModal.value = false;
    }
  },
  { immediate: true },

);

function closeModal() {
  router.replace("/dashboard/locations");
  // resetForm();
}

// const showViewModal = ref(false);
</script>

<template>
  <div>
    <UiSideModal
      :model-value="showAddModal"
      @update:model-value="(val: boolean) => { if (!val) closeModal() }"
    >
      <FormAddLocation
        @close="closeModal"
      />
    </UiSideModal>
    <!-- <LocationDetailModal

      :model-value="showViewModal"
      :location="selectedLocation"
      @update:model-value="(val: boolean) => { if (!val) closeViewModal() }"
    /> -->
    <section class="p-6 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">
          Saved Locations
        </h1>
        <NuxtLink to="/dashboard/locations?add=true" class="btn btn-secondary">
          <Icon name="tabler:plus" class="mr-2" /> Add Location
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- <div
          v-for="loc in locations"
          :key="loc.name"
          class="card shadow-md bg-base-300"
        >
          <div class="card-body">
            <h2 class="card-title">
              <i class="bi bi-geo-alt-fill text-primary" />
              {{ loc.name }}
            </h2>
            <p class="text-sm text-base-content/60">
              {{ loc.description }}
            </p>
            <p class="text-sm">
              Lat: {{ loc.lat }}, Long: {{ loc.long }}
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-outline btn-sm" @click="openViewModal(loc.id)">
                View
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>
