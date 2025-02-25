<template>
  <header
    ref="target"
    class="fixed top-0 left-0 w-full h-16 bg-zinc-100 text-zinc-900 border-b-4 border-black flex justify-between items-center px-4 z-20"
  >
    <NuxtLink class="font-bold" to="/">
      &lt;&gt;Michael Carillon&lt;/&gt;
    </NuxtLink>
    <nav v-if="!small" class="flex gap-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/experience">Experience</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </nav>
    <BaseButton v-if="small" @click="onMenuClick">
      <i v-if="!isMenuOpen" class="fa-solid fa-bars"></i>
      <i v-else class="fa-solid fa-xmark"></i>
    </BaseButton>
    <Transition name="slide-in-right">
      <div
        class="fixed top-16 right-0 w-64 h-svh bg-zinc-200 text-zinc-900 p-4 border-l-2 border-black z-20"
        v-if="isMenuOpen"
      >
        <nav class="flex flex-col items-center gap-4">
          <NuxtLink to="/" @click="onNuxtLinkClick">Home</NuxtLink>
          <NuxtLink to="/experience" @click="onNuxtLinkClick"
            >Experience</NuxtLink
          >
          <NuxtLink to="/projects" @click="onNuxtLinkClick">Projects</NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
  <Transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed left-0 top-0 w-full h-svh bg-black/50 z-10"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
import BaseButton from '@/components/shared/BaseButton.vue';
import { breakpointsTailwind, onClickOutside } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const isMenuOpen = ref<boolean>(false);
const target = ref(null);

const small = breakpoints.smallerOrEqual('sm');

const onMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const onNuxtLinkClick = () => {
  isMenuOpen.value = false;
};

onClickOutside(target, (event) => {
  isMenuOpen.value = false;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-in-right-enter-from {
  transform: translateX(100%);
}
.slide-in-right-enter-to {
  transform: translateX(0);
}
.slide-in-right-leave-from {
  transform: translateX(0);
}
.slide-in-right-leave-to {
  transform: translateX(100%);
}
</style>
