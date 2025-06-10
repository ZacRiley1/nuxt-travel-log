<script setup lang="ts">
import { z } from "zod";

const locations = [
  { name: "Lisbon, Portugal", date: "2025-05-22", notes: "Nomad base for summer" },
  { name: "Tokyo, Japan", date: "2025-04-12", notes: "Cherry blossom trip" },
  { name: "Reykjavik, Iceland", date: "2025-01-03", notes: "Northern lights" },
];

definePageMeta({
  layout: "dashboard", // corresponds to layouts/dashboard.vue
});

const router = useRouter();
const route = useRoute();
const showAddModal = ref(false);

watchEffect(() => {
  showAddModal.value = route.query.add === "true";
});

const LocationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  lat: z.coerce.number().min(-90).max(90),
  long: z.coerce.number().min(-180).max(180),
});

type LocationForm = z.infer<typeof LocationSchema>;

const form = reactive<LocationForm>({
  name: "",
  description: "",
  lat: 0,
  long: 0,
});

const errors = reactive<Record<string, string>>({});

function resetForm() {
  form.name = "";
  form.description = "";
  form.lat = 0;
  form.long = 0;
  for (const key in errors) {
    delete errors[key];
  }
}

function closeModal() {
  router.replace("/dashboard/locations");
  resetForm();
}

function submit() {
  const result = LocationSchema.safeParse(form);
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors as Record<string, string[]>;
    for (const key in fieldErrors) {
      errors[key] = fieldErrors[key]?.[0] ?? "";
    }
    return;
  }
  // TODO: handle persistence
  closeModal();
}
</script>

<template>
  <div>
    <UiSideModal
      :model-value="showAddModal"
      @update:model-value="(val: boolean) => { if (!val) closeModal() }"
    >
      <h3 class="font-bold text-lg mb-4">
        Add Location
      </h3>
      <form class="space-y-4" @submit.prevent="submit">
        <div>
          <input
            v-model="form.name"
            class="input input-bordered w-full"
            placeholder="Name"
          >
          <p v-if="errors.name" class="text-error text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>
        <div>
          <textarea
            v-model="form.description"
            class="textarea textarea-bordered w-full"
            placeholder="Description"
          />
          <p v-if="errors.description" class="text-error text-sm mt-1">
            {{ errors.description }}
          </p>
        </div>
        <div class="flex gap-2">
          <input
            v-model.number="form.lat"
            type="number"
            class="input input-bordered w-full"
            placeholder="Latitude"
          >
          <input
            v-model.number="form.long"
            type="number"
            class="input input-bordered w-full"
            placeholder="Longitude"
          >
        </div>
        <p v-if="errors.lat" class="text-error text-sm mt-1">
          {{ errors.lat }}
        </p>
        <p v-if="errors.long" class="text-error text-sm mt-1">
          {{ errors.long }}
        </p>
        <div class="mt-4 flex justify-end gap-2">
          <button
            type="button"
            class="btn"
            @click="closeModal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </UiSideModal>
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
        <div
          v-for="loc in locations"
          :key="loc.name"
          class="card shadow-md bg-base-300"
        >
          <div class="card-body">
            <h2 class="card-title">
              <i class="bi bi-geo-alt-fill text-primary" />
              {{ loc.name }}
            </h2>
            <p class="text-sm text-muted">
              {{ loc.date }}
            </p>
            <p>{{ loc.notes }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-outline btn-sm">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
