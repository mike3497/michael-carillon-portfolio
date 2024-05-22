<template>
  <div id="my-projects" class="container my-4">
    <SectionHeading>//Projects</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/projects/ProjectCard.vue';
import SectionHeading from '@/components/shared/SectionHeading.vue';
import { Project } from '@/models/project';

const projects: Project[] = [
  {
    description:
      'A site for my wedding to help share useful information with my guests.',
    github: 'https://github.com/mike3497/carillon-wedding',
    image: '/images/projects/carillon_wedding.png',
    link: 'https://carillonwedding.netlify.app/',
    title: 'Carillon Wedding',
  },
  {
    description: `An app for my friends and I to pick who we'll think will win college football games.`,
    github: 'https://github.com/mike3497/cfb-pickem-app',
    image: '/images/projects/my_cfb_pickem.png',
    link: 'https://my-cfb-pickem.netlify.app/',
    title: `My CFB Pick'em`,
  },
  {
    description: `An app to generate color palettes inspired by Coolors.`,
    github: 'https://github.com/mike3497/color-app',
    image: '/images/projects/colorify.png',
    link: 'https://endearing-pegasus-f5063a.netlify.app/',
    title: 'Colorify',
  },
];
</script>
