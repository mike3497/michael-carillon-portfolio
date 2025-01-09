<template>
  <header ref="target" class="bg-zinc-100 text-black sticky top-0 z-5">
    <div class="border-b-2 border-black">
      <div class="container flex flex-row items-center justify-between h-16">
        <NuxtLink class="font-bold" to="/">
          &lt;&gt;Michael Carillon&lt;/&gt;
        </NuxtLink>
        <nav class="hidden sm:flex flex-row items-center">
          <div></div>
          <div class="flex flex-row gap-4">
            <NuxtLink
              class="border-b-2 border-transparent hover:border-black"
              to="/"
              activeClass="font-bold"
            >
              Home
            </NuxtLink>
            <span>|</span>
            <NuxtLink
              class="border-b-2 border-transparent hover:border-black"
              to="/experience"
              activeClass="font-bold"
            >
              Experience
            </NuxtLink>
            <span>|</span>
            <NuxtLink
              class="border-b-2 border-transparent hover:border-black"
              to="/projects"
              activeClass="font-bold"
            >
              Projects
            </NuxtLink>
          </div>
        </nav>
        <BaseButton class="sm:hidden" @click="onMenuClick">
          <i v-if="!isMenuOpen" class="fa-solid fa-bars"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </BaseButton>
      </div>
    </div>
    <Transition>
      <div
        v-if="isMenuOpen"
        class="sm:hidden bg-zinc-200 text-black p-4 border-b-2 border-black"
      >
        <nav class="flex flex-col items-center gap-4">
          <NuxtLink
            class="border-b-2 border-transparent hover:border-black"
            to="/"
            activeClass="font-bold"
            @click="onNuxtLinkClick"
          >
            Home
          </NuxtLink>
          <NuxtLink
            class="border-b-2 border-transparent hover:border-black"
            to="/experience"
            activeClass="font-bold"
            @click="onNuxtLinkClick"
          >
            Experience
          </NuxtLink>
          <NuxtLink
            class="border-b-2 border-transparent hover:border-black"
            to="/projects"
            activeClass="font-bold"
            @click="onNuxtLinkClick"
          >
            Projects
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import BaseButton from '@/components/shared/BaseButton.vue';
import { onClickOutside } from '@vueuse/core';

const isMenuOpen = ref<boolean>(false);
const target = ref(null);

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
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  max-height: 0;
}

.v-enter-to,
.v-leave-from {
  max-height: 100vh;
}
</style>
