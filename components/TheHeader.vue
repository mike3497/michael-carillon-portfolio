<template>
  <header class="bg-white text-black border-b-4 border-black sticky top-0 z-50">
    <nav
      class="container mx-auto flex flex-row justify-center items-center sm:justify-between h-16"
    >
      <div class="hidden sm:flex flex-row gap-4">
        <CircleIconLink
          href="https://github.com/mike3497"
          aria-label="Michael Carillon Github"
          :variant="CircleIconLinkVariant.BLACK"
        >
          <i class="fa-brands fa-github"></i>
        </CircleIconLink>
        <CircleIconLink
          href="https://linkedin.com/in/michael-carillon"
          aria-label="Michael Carillon LinkedIn"
          :variant="CircleIconLinkVariant.BLACK"
        >
          <i class="fa-brands fa-linkedin-in"> </i>
        </CircleIconLink>
      </div>
      <div class="flex flex-row gap-4">
        <a
          class="border-b-2 border-transparent hover:border-black"
          href="#about-me"
          >About</a
        >
        <a
          class="border-b-2 border-transparent hover:border-black"
          href="#experience"
          >Experience</a
        >
        <a
          class="border-b-2 border-transparent hover:border-black"
          href="#my-projects"
          >Projects</a
        >
      </div>
    </nav>
  </header>
  <div class="bg-blue-500 text-white border-b-2 border-black">
    <div class="container mx-auto">
      <div
        class="flex flex-col justify-center gap-2 h-[512px]"
        v-motion-slide-left
      >
        <h3>Hi, I am</h3>
        <h1 class="font-bold uppercase text-4xl">Michael Carillon</h1>
        <h2>Full-stack Web Developer</h2>
        <div class="flex flex-row gap-4 text-sm">
          <a class="underline" href="mailto:mcarillon97@gmail.com"
            >mcarillon97@gmail.com</a
          >
          <a class="underline" href="tel:3307037919">(330) 703-7919</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CircleIconLink from '@/components/shared/CircleIconLink.vue';
import { CircleIconLinkVariant } from '@/types/circleIconLinkVariant';
</script>
