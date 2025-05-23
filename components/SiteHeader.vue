<template>
  <header
    ref="target"
    class="fixed top-0 left-0 w-full h-16 bg-zinc-100 text-zinc-900 border-b-4 border-black flex justify-between items-center px-4 z-20"
  >
    <NuxtLink class="font-bold" to="/">
      &lt;&gt;Michael Carillon&lt;/&gt;
    </NuxtLink>
    <nav v-if="!small" class="flex gap-8">
      <NuxtLink
        v-for="menuItem in menuItems"
        :key="menuItem.name"
        :to="menuItem.route"
        activeClass="font-bold"
      >
        {{ menuItem.name }}
      </NuxtLink>
    </nav>
    <BaseButton
      v-if="small"
      aria-label="Toggle navigation menu"
      :aria-expanded="isMenuOpen.toString()"
      @click="onMenuClick"
    >
      <i v-if="!isMenuOpen" class="fa-solid fa-bars"></i>
      <i v-else class="fa-solid fa-xmark"></i>
    </BaseButton>
    <Transition name="slide-in-right">
      <div
        v-if="isMenuOpen"
        class="fixed top-16 right-0 w-64 h-svh bg-zinc-200 text-zinc-900 border-l-2 border-black z-20 p-2"
        role="navigation"
        aria-label="mobile navigation"
      >
        <nav class="flex flex-col items-start">
          <NuxtLink
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            :to="menuItem.route"
            activeClass="bg-blue-600 text-white"
            class="w-full p-4"
            @click="onNuxtLinkClick"
          >
            {{ menuItem.name }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
  <Transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed left-0 top-0 w-full h-svh bg-black/50 backdrop-blur-sm z-10"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
import BaseButton from '@/components/shared/BaseButton.vue';
import { breakpointsTailwind, onClickOutside } from '@vueuse/core';
import { onUnmounted, ref, watch } from 'vue';

interface MenuItem {
  name: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { name: 'Home', route: '/' },
  { name: 'Experience', route: '/experience' },
  { name: 'Projects', route: '/projects' },
];

const breakpoints = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 });

const isMenuOpen = ref<boolean>(false);
const target = ref(null);

const small = breakpoints.smallerOrEqual('sm');

const onMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const onNuxtLinkClick = () => {
  isMenuOpen.value = false;
};

onClickOutside(target, () => {
  isMenuOpen.value = false;
});

const preventScroll = () => {
  document.body.style.overflow = 'hidden';
};

const allowScroll = () => {
  document.body.style.overflow = '';
};

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    preventScroll();
  } else {
    allowScroll();
  }
});

onUnmounted(() => {
  allowScroll();
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
