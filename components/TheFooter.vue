<template>
  <footer class="bg-zinc-900 text-white py-4">
    <div class="flex flex-col items-center gap-2 mb-4">
      <a class="flex items-center gap-2" href="mailto:mcarillon97@gmail.com">
        <span class="material-symbols-outlined"> mail </span>
        <span> mcarillon97@gmail.com</span>
      </a>
      <a class="flex items-center gap-2" href="tel:3307037919">
        <span class="material-symbols-outlined"> call </span>
        <span>(330) 703-7919</span>
      </a>
    </div>
    <div class="flex flex-row gap-4 justify-center mb-4">
      <CircleIconLink
        to="https://github.com/mike3497"
        aria-label="Michael Carillon Github"
      >
        <i class="fa-brands fa-github"></i>
      </CircleIconLink>
      <CircleIconLink
        to="https://linkedin.com/in/michael-carillon"
        aria-label="Michael Carillon LinkedIn"
      >
        <i class="fa-brands fa-linkedin-in"></i>
      </CircleIconLink>
    </div>
    <p class="text-center text-xs">© Copyright 2023 Michael Carillon</p>
  </footer>
</template>

<script setup lang="ts">
import CircleIconLink from '~/components/shared/CircleIconLink.vue';
</script>
