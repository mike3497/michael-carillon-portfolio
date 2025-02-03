<template>
  <footer class="bg-zinc-800 text-zinc-100 border-t-4 border-zinc-900 py-8">
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
