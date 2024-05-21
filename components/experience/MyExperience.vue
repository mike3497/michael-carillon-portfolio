<template>
  <div id="experience" class="container">
    <SectionHeading>//Experience</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-5">
      <div class="col-span-2 mb-4">
        <ul>
          <li
            v-for="(experience, index) in experiences"
            :key="experience.employer"
          >
            <button
              class="hover:border-l-green-500 hover:border-l-2 hover:pl-2 my-1"
              :class="{
                'font-bold border-l-green-500 border-l-4 pl-2':
                  selectedIndex === index,
              }"
              @click="() => (selectedIndex = index)"
            >
              {{ experience.employer }}
            </button>
          </li>
        </ul>
      </div>
      <div class="col-span-3">
        <ExperienceCard :experience="selectedExperience" />
      </div>
    </div>
    <LinkButton
      class="mb-6"
      href="/assets/Michael Carillon Resume 2023.pdf"
      download="Michael Carillon Resume 2023"
    >
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined"> download </span>
        <span>Resume PDF</span>
      </div>
    </LinkButton>
  </div>
</template>

<script setup lang="ts">
import experiencesData from '@/assets/data/experiences.json';
import ExperienceCard from '@/components/experience/ExperienceCard.vue';
import LinkButton from '@/components/shared/LinkButton.vue';
import SectionHeading from '@/components/shared/SectionHeading.vue';
import { Experience } from '@/models/experience';

const experiences = ref<Experience[]>(experiencesData);
const selectedIndex = ref<number>(experiences.value.length - 1);

const selectedExperience = computed<Experience>(
  () => experiences.value[selectedIndex.value]
);
</script>
