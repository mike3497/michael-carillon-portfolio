<template>
  <div id="my-projects" class="container mx-auto px-4 mb-6">
    <SectionHeading>//Projects</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="project in projects">
        <a :href="project.link">
          <img :src="project.image" alt="Project Image" class="w-full" />
        </a>
        <div class="bg-zinc-100 p-4">
          <a class="font-bold text-lg" :href="project.link">
            {{ project.title }}
          </a>
          <p class="mb-2">
            {{ project.description }}
          </p>
          <a
            class="inline-block bg-blue-500 text-white hover:bg-blue-600 active:scale-105 transition-all px-4 py-2"
            :href="project.github"
          >
            <i class="fa-brands fa-github mr-2"></i>
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '@/components/shared/SectionHeading.vue';
import { Project } from '@/models/project';

const projects: Project[] = [
  {
    description:
      'A site for my wedding to help share useful information with my guests.',
    github: 'https://github.com/mike3497/carillon-wedding',
    image: '/assets/images/projects/carillon-wedding.png',
    link: 'https://www.carillonwedding.com/',
    title: 'Wedding Website',
  },
  {
    description: `An app for my friends and I to pick who we'll think will win college football games.`,
    github: 'https://github.com/mike3497/cfb-pickem-app',
    image: '/assets/images/projects/my-cfb-pickem.png',
    link: 'https://my-cfb-pickem.netlify.app/',
    title: `My CFB Pick'em`,
  },
];
</script>
