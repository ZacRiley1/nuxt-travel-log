<script setup lang="ts">
// Get today and the start of the week (Monday)
const today = new Date();
const day = today.getDay();
const mondayOffset = day === 0 ? -6 : 1 - day;
const weekStart = new Date(today);
weekStart.setDate(today.getDate() + mondayOffset);

// Build array of 7 dates for the week
const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(weekStart);
  d.setDate(d.getDate() + i);
  return d;
});

// Example static events (replace later with actual logs)
const events = [
  { date: getDateString(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)), title: "Check-in @ Berlin", time: "10:30" },
  { date: getDateString(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)), title: "Photo log: East Side Gallery", time: "14:00" },
];

// Helper functions
function getDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getDayName(date: Date): string {
  return date.toLocaleDateString("en-GB", { weekday: "short" });
}

function getFormattedDate(date: Date): string {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}
</script>

<template>
  <div class="bg-base-200 shadow-md border border-primary card p-4 overflow-x-auto">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">
        This Week
      </h2>
      <span class="text-xs opacity-60">{{ new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }}</span>
    </div>

    <div class="grid grid-cols-7 gap-2 text-center min-w-[700px]">
      <div
        v-for="(day, i) in days"
        :key="i"
        class="bg-base-300 rounded-md px-2 py-3 flex flex-col items-center"
      >
        <div class="text-sm font-semibold">
          {{ getDayName(day) }}
        </div>
        <div class="text-xs opacity-70">
          {{ getFormattedDate(day) }}
        </div>

        <ul class="mt-2 text-xs space-y-1 text-left w-full">
          <li
            v-for="event in events.filter(e => e.date === getDateString(day))"
            :key="event.time"
            class="bg-secondary rounded px-2 py-1 truncate"
          >
            <span class="font-medium">{{ event.time }}</span> — {{ event.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
