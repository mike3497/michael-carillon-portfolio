<template>
  <div class="border-2 border-black">
    <a :href="project.link">
      <img
        :src="project.image"
        alt="Project Image"
        class="w-full border-b-2 border-black"
      />
    </a>
    <div class="bg-zinc-100 p-4">
      <a class="font-bold text-lg" :href="project.link">
        {{ project.title }}
      </a>
      <p class="mb-4">
        {{ project.description }}
      </p>
      <LinkButton
        class="inline-block bg-blue-500 text-white border-2 border-black hover:bg-black active:scale-105 transition-all px-4 py-2"
        :href="project.github"
      >
        <i class="fa-brands fa-github mr-2"></i>
        <span>Github</span>
      </LinkButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkButton from '@/components/shared/LinkButton.vue';
import { Project } from '@/models/project';

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>
