<script setup lang="ts">
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hours = Array.from({ length: 13 }, (_, i) => i + 8); // 8AM to 8PM

function formatHour(hour: number) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const display = hour > 12 ? hour - 12 : hour;
  return `${display}${suffix}`;
}
</script>

<template>
  <div class="w-full overflow-x-auto">
    <div class="grid grid-cols-8 min-w-[1000px] border border-base-300 rounded-xl shadow-md">
      <!-- Time Labels Column -->
      <div class="bg-base-200 text-xs text-right pr-2 pt-12">
        <div
          v-for="hour in hours"
          :key="hour"
          class="h-[64px] px-1 py-0.5 border-t border-base-300 text-base-content/60"
        >
          {{ formatHour(hour) }}
        </div>
      </div>

      <!-- Days Columns -->
      <div
        v-for="(day, index) in days"
        :key="index"
        class="relative border-l border-base-300"
      >
        <div class="sticky top-0 z-10 bg-base-100 text-center py-2 text-sm font-semibold border-b border-base-300">
          {{ day }}
        </div>

        <!-- Time Slots -->
        <div
          v-for="hour in hours"
          :key="hour"
          class="h-[64px] border-t border-base-300 relative"
        >
          <!-- Example Slot -->
          <div
            v-if="day === 'Wednesday' && hour === 13"
            class="absolute left-1 right-1 top-1 bg-primary text-primary-content rounded-md px-2 py-1 text-xs shadow-sm"
          >
            Flight: Lisbon → Rome
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
