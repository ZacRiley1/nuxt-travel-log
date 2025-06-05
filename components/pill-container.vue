<script setup lang="ts">
const props = defineProps({
  width: {
    type: String as () => "s" | "m" | "l",
    default: "m",
  },
  height: {
    type: String as () => "s" | "m" | "l",
    default: "m",
  },
  position: {
    type: String as () => "left" | "right" | "center",
    default: "center",
  },
  full: Boolean,
  dismissable: Boolean,
  animated: Boolean,
  duration: {
    type: Number,
    default: 0,
  },
  colors: {
    type: Array as () => string[],
    default: () => [
      "var(--color-secondary)",
      "var(--color-accent)",
      "var(--color-info-content)",
      "var(--color-info)",
      "var(--color-secondary)",
    ],
  },
  surface: {
    type: String,
    default: "canvas",
  },
  showBorder: {
    type: Boolean,
    default: true,
  },
});

const visible = ref(true);

if (props.duration > 0) {
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}

function rotateColors(colors: string[]) {
  const rotated = [...colors];
  rotated.push(rotated.shift()!);
  return rotated;
}

const widthMap = {
  s: "w-fit px-4",
  m: "w-full max-w-5xl px-6",
  l: "w-screen px-8",
};

const heightMap = {
  s: "py-1 text-sm",
  m: "py-4 text-base",
  l: "py-16 text-lg",
};

const widthClass = computed(() => widthMap[props.width]);
const heightClass = computed(() => heightMap[props.height]);
const glowAnimated = computed(() => props.animated);
const positionClass = computed(() => {
  if (props.position === "left")
    return "ml-0 mr-auto";
  if (props.position === "right")
    return "mr-0 ml-auto";
  return "mx-auto";
});

const computedStyle = computed(() => {
  const colors = props.animated ? rotateColors(props.colors) : props.colors;
  const colorVars = colors.map((clr, i) => `--clr-${i + 1}: ${clr};`).join(" ");
  return `
    ${colorVars};
    --surface: ${props.surface};
    --border-width: ${props.showBorder ? "1px" : "0"};
    --glow-size: .5rem;
    --glow-intensity: 0.15;
  `;
});
</script>

<template>
  <div
    v-if="visible"
    class="glowing-border relative overflow-hidden flex items-center justify-center whitespace-pre-wrap text-zinc-800 dark:text-zinc-100 bg-white/80 dark:bg-zinc-900/80"
    :class="[
      full ? 'w-full px-8' : widthClass,
      heightClass,
      positionClass,
      glowAnimated ? 'animate-glow' : '',
      full || position === 'center'
        ? 'rounded-full'
        : position === 'right'
          ? 'rounded-l-full'
          : 'rounded-r-full',
      position === 'left' ? 'no-left-border' : '',
      position === 'right' ? 'no-right-border' : '',
    ]"
    :style="computedStyle"
  >
    <div class="relative w-full px-4 py-2 flex items-center justify-between gap-4">
      <slot />
      <button
        v-if="dismissable"
        class="text-xl -me-6 font-bold text-current flex items-center justify-end"
        @click="visible = false"
      >
        <Icon name="tabler:x" class="text-primary" />
      </button>
    </div>
  </div>
</template>

<style scoped>
@property --glow-deg {
  syntax: "<angle>";
  inherits: true;
  initial-value: -90deg;
}

.no-left-border {
  border-left: 0 !important;
}

.no-right-border {
  border-right: 0 !important;
}

.glowing-border {
  --gradient-glow: var(--clr-1), var(--clr-2), var(--clr-3), var(--clr-4), var(--clr-5), var(--clr-1);
  border: var(--border-width, 1px) solid transparent;
  background:
    linear-gradient(var(--surface, canvas) 0 0) padding-box,
    conic-gradient(from var(--glow-deg), var(--gradient-glow)) border-box;
  position: relative;
  isolation: isolate;
  overflow: visible;
  box-sizing: border-box;
}

@keyframes glow {
  100% {
    --glow-deg: 270deg;
  }
}

.animate-glow {
  animation: glow 6s linear infinite;
}

.glowing-border::before,
.glowing-border::after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

.glowing-border::before {
  z-index: -1;
  background: var(--surface, canvas);
  inset: 0.5rem;
  transform-origin: right;
  filter: blur(var(--glow-size, 1rem));
}

.glowing-border::after {
  z-index: -2;
  inset: -1.5rem;
  background: conic-gradient(from var(--glow-deg), var(--gradient-glow));
  filter: blur(var(--glow-size, 1rem));
  opacity: var(--glow-intensity, 0.125);
}
</style>
