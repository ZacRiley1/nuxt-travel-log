<script setup lang="ts">
const props = defineProps<{ 
  modelValue: boolean; 
  location: {
    id: number;
    name: string;
    description: string | null;
    lat: number;
    long: number;
    images: { id: number; key: string }[];
  } | null;
}>();

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

function close() {
  emit('update:modelValue', false);
}
</script>

<template>
  <UiSideModal :model-value="props.modelValue" @update:model-value="emit('update:modelValue', $event)">
    <div v-if="props.location">
      <h3 class="font-bold text-lg mb-2">{{ props.location.name }}</h3>
      <p v-if="props.location.description" class="mb-2 text-sm text-base-content/80">
        {{ props.location.description }}
      </p>
      <p class="text-sm mb-4">Lat: {{ props.location.lat }}, Long: {{ props.location.long }}</p>
      <div class="grid grid-cols-2 gap-2">
        <img
          v-for="img in props.location.images"
          :key="img.id"
          :src="img.key"
          class="w-full h-32 object-cover rounded-md"
        />
      </div>
      <div class="mt-4 flex justify-end">
        <button class="btn" @click="close">Close</button>
      </div>
    </div>
  </UiSideModal>
</template>
