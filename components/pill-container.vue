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
      "var(--color-success)",
      "var(--color-base-300)",
      "var(--color-primary)",
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
  borderWidth: {
    type: String,
    default: "2px",
  },
  glowSize: {
    type: String,
    default: "1.5rem",
  },
  glowIntensity: {
    type: String,
    default: "0.25",
  },
});

const daisyTokenMap: Record<string, string> = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
  neutral: "var(--color-neutral)",
  base: "var( --color-base-100)",
  error: "var(--color-error)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  info: "var(--color-info)",
};

function resolveSurface(input: string) {
  return daisyTokenMap[input] || input;
}

function resolveColors(arr: string[]) {
  return arr.map(c => daisyTokenMap[c] || c);
}

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
  const effectiveColors = props.animated ? rotateColors(props.colors) : props.colors;
  const resolvedColors = resolveColors(effectiveColors);
  const colorVars = resolvedColors.map((clr, i) => `--clr-${i + 1}: ${clr};`).join(" ");

  return `
    ${colorVars}
    --surface: ${resolveSurface(props.surface)};
    --border-width: ${props.showBorder ? props.borderWidth : "0"};
    --glow-size: ${props.showBorder ? props.glowSize : "0"};
    --glow-intensity: ${props.showBorder ? props.glowIntensity : "0"};
  `;
});
</script>

<template>
  <div
    v-if="visible"
    class="glowing-border relative overflow-hidden flex items-center justify-center whitespace-pre-wrap text-zinc-800 glass dark:text-zinc-100"
    :class="[
      full ? 'w-full px-8' : widthClass,
      heightClass,
      positionClass,
      glowAnimated ? 'animate-glow' : '',
      full || position === 'center'
        ? 'rounded-md'
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
        <Icon name="tabler:x" class="text-primary-content" />
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
    linear-gradient(to right, var(--surface), var(--surface)) padding-box,
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
  animation: glow 9s linear infinite;
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
