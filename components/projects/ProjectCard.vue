<template>
  <article
    class="flex flex-col flex-1 bg-zinc-100 border-2 border-black shadow-solid"
  >
    <img
      :src="project.image"
      alt="Project Image"
      class="w-full border-b-2 border-black"
    />
    <section class="flex flex-col flex-1 justify-between p-4">
      <header>
        <h2 class="font-bold text-lg">
          {{ project.title }}
        </h2>
        <p class="mb-4">{{ project.description }}</p>
      </header>
      <footer class="flex flex-row gap-4">
        <LinkButton
          v-if="project.link"
          class="bg-blue-600 text-white border-2 border-black hover:bg-black active:scale-105 transition-all px-4 py-2"
          :href="project.link"
        >
          <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>
          <span>Link</span>
        </LinkButton>
        <LinkButton
          class="bg-blue-600 text-white border-2 border-black hover:bg-black active:scale-105 transition-all px-4 py-2"
          :href="project.github"
        >
          <i class="fa-brands fa-github mr-2"></i>
          <span>Github</span>
        </LinkButton>
      </footer>
    </section>
  </article>
</template>

<script setup lang="ts">
import LinkButton from '@/components/shared/LinkButton.vue';
import type { Project } from '@/models/project';

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>
