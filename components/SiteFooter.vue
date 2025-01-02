<template>
  <footer class="bg-zinc-900 text-white py-4">
    <!-- <ul class="flex justify-center gap-4 mb-4">
      <li>
        <a href="mailto:mcarillon97@gmail.com" class="flex items-center">
          <i class="fa-solid fa-envelope mr-2"></i>
          <span>mcarillon97@gmail.com</span>
        </a>
      </li>
    </ul> -->
    <ul class="flex flex-row gap-4 justify-center mb-4">
      <li>
        <CircleIconLink
          href="https://github.com/mike3497"
          aria-label="Michael Carillon Github"
          :variant="CircleIconLinkVariant.WHITE"
        >
          <i class="fa-brands fa-github"></i>
        </CircleIconLink>
      </li>
      <li>
        <CircleIconLink
          href="https://linkedin.com/in/michael-carillon"
          aria-label="Michael Carillon LinkedIn"
          :variant="CircleIconLinkVariant.WHITE"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </CircleIconLink>
      </li>
    </ul>
    <p class="text-center text-xs">
      © Copyright 2023 - {{ year }} Michael Carillon
    </p>
  </footer>
</template>

<script setup lang="ts">
import CircleIconLink from '@/components/shared/CircleIconLink.vue';
import { CircleIconLinkVariant } from '~/types/circleIconLinkVariant';

const year = ref<number>(new Date().getFullYear());
</script>
