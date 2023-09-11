<template>
  <div id="experience" class="container mx-auto px-4">
    <SectionHeading>//Experience</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-5">
      <div class="col-span-2 mb-4">
        <ul>
          <li v-for="(experience, index) in experiences" :key="index">
            <button
              class="my-1"
              :class="{
                'font-bold border-l-green-500 border-l-2 pl-2':
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

    <div class="prose mb-2">
      <p>
        I'm a web developer with over 2 years of experience, specializing in
        crafting responsive websites and web applications. My skill set includes
        proficiency in HTML, CSS, and JavaScript, with a solid grasp of
        front-end development and web design principles. I'm well-versed in
        popular front-end frameworks like React and Vue, and I'm no stranger to
        Agile development methods and version control systems like Git.
      </p>
      <p>
        Collaboration is my strong suit, thanks to excellent communication and
        problem-solving abilities. I'm highly motivated to stay on top of
        industry trends and the latest advancements in web development
        technology.
      </p>
      <p>
        My commitment revolves around delivering top-notch work that aligns with
        your expectations. I take great pride in my keen attention to detail and
        continually invest in updating my knowledge and skills, ensuring I stay
        ahead of industry trends to provide you with the best possible work.
      </p>
    </div>
    <a
      class="inline-block bg-blue-500 text-white hover:bg-blue-600 active:scale-105 transition-all px-4 py-2 mb-6"
      href="/assets/Michael Carillon Resume 2023.pdf"
      download="Michael Carillon Resume 2023"
    >
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined"> download </span>
        <span>Resume PDF</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Experience } from '@/models/experience';
import SectionHeading from '~/components/shared/SectionHeading.vue';
import ExperienceCard from '~/components/experience/ExperienceCard.vue';
import experiencesData from '~/assets/data/experiences.json';

const experiences = ref<Experience[]>(experiencesData);
const selectedIndex = ref<number>(experiences.value.length - 1);

const selectedExperience = computed<Experience>(
  () => experiences.value[selectedIndex.value]
);
</script>
