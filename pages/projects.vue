<template>
  <NuxtLayout>
    <div class="container my-4">
      <SectionHeading>//Projects</SectionHeading>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/projects/ProjectCard.vue';
import SectionHeading from '@/components/shared/SectionHeading.vue';
import type { Project } from '@/models/project';

const projects: Project[] = [
  {
    description:
      'A basic CRUD web-app to practice creating a full-stack application. Built with Vue, NestJS, and PostgreSQL.',
    github: 'https://github.com/mike3497/books-crud-app',
    image:
      'https://imagedelivery.net/TDyWoJyPOtWgr4wZSDioNA/1e055e54-79b3-43c6-6e58-f62e862fec00/public',
    link: 'https://books-crud-app.netlify.app/',
    title: 'Books CRUD App',
  },
  {
    description:
      'A site for my wedding to help share useful information with my guests.',
    github: 'https://github.com/mike3497/carillon-wedding',
    image:
      'https://imagedelivery.net/TDyWoJyPOtWgr4wZSDioNA/0d8507c9-07e1-4f64-d642-956553d4c100/public',
    link: 'https://carillonwedding.netlify.app/',
    title: 'Carillon Wedding',
  },
  {
    description: 'An app to generate color palettes inspired by Coolors.',
    github: 'https://github.com/mike3497/color-app',
    image:
      'https://imagedelivery.net/TDyWoJyPOtWgr4wZSDioNA/5bf8dfe1-7421-4cb5-d286-c78c9f47ce00/public',
    link: 'https://endearing-pegasus-f5063a.netlify.app/',
    title: 'Colorify',
  },
  {
    description:
      'A JavaScript library for calculating color contrast ratios and WCAG conformance.',
    github: 'https://github.com/mike3497/color-contrast-ratio',
    image:
      'https://imagedelivery.net/TDyWoJyPOtWgr4wZSDioNA/a6f71270-f1d0-4e0f-a962-630006376000/public',
    link: 'https://www.npmjs.com/package/color-contrast-ratio',
    title: 'color-contrast-ratio',
  },
];
</script>
