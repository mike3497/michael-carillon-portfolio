<template>
  <footer class="bg-zinc-900 text-white py-4">
    <div class="flex justify-center gap-4 mb-4">
      <a href="mailto:mcarillon97@gmail.com">
        <i class="fa-solid fa-envelope mr-2"></i>
        <span>mcarillon97@gmail.com</span>
      </a>
      <a href="tel:3307037919">
        <i class="fa-solid fa-phone mr-2"></i>
        <span>(330) 703-7919</span>
      </a>
    </div>
    <div class="flex flex-row gap-4 justify-center mb-4">
      <CircleIconLink
        href="https://github.com/mike3497"
        aria-label="Michael Carillon Github"
        :variant="CircleIconLinkVariant.WHITE"
      >
        <i class="fa-brands fa-github"></i>
      </CircleIconLink>
      <CircleIconLink
        href="https://linkedin.com/in/michael-carillon"
        aria-label="Michael Carillon LinkedIn"
        :variant="CircleIconLinkVariant.WHITE"
      >
        <i class="fa-brands fa-linkedin-in"></i>
      </CircleIconLink>
    </div>
    <p class="text-center text-xs">© Copyright {{ year }} Michael Carillon</p>
  </footer>
</template>

<script setup lang="ts">
import CircleIconLink from '@/components/shared/CircleIconLink.vue';
import { CircleIconLinkVariant } from '~/types/circleIconLinkVariant';

const year = computed<number>(() => new Date().getFullYear());
</script>
