<template>
  <footer class="bg-zinc-900 text-white py-4">
    <div class="mb-4">
      <p class="text-center mb-2">
        <a href="#"
          ><i class="fa-solid fa-envelope mr-2"></i>mcarillon97@gmail.com</a
        >
      </p>
      <p class="text-center">
        <a href="#"><i class="fa-solid fa-phone mr-2"></i>(330) 703-7919</a>
      </p>
    </div>
    <div class="flex flex-row gap-4 justify-center mb-4">
      <CircleIconLink to="#">
        <i class="fa-brands fa-linkedin-in"></i>
      </CircleIconLink>
      <CircleIconLink to="#">
        <i class="fa-brands fa-github"></i>
      </CircleIconLink>
    </div>
    <p class="text-center text-xs">© Copyright 2023 Michael Carillon</p>
  </footer>
</template>

<script setup lang="ts">
import CircleIconLink from '~/components/shared/CircleIconLink';
</script>
