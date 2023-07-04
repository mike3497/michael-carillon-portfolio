<template>
  <div id="experience" class="container mx-auto">
    <SectionHeading>//Experience</SectionHeading>
    <div class="grid grid-cols-5">
      <div class="col-span-2">
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

    <div class="max-w-xl">
      <p class="mb-2">
        I am a web developer with 2 years of experience in designing and
        developing responsive websites and web applications. I am proficient in
        HTML, CSS, JavaScript. I have a strong understanding of front-end
        development and web design principles. I am experienced in using React,
        NextJS, and Node.Js. I am familiar with Agile development methodologies
        and version control systems such as Git. I am a team player with
        excellent communication and problem-solving skills. I am highly
        motivated to stay current with industry trends and advancements in web
        development technology.
      </p>
      <p class="mb-2">
        I am dedicated to providing high-quality work that meets your
        expectations. I take pride in my attention to detail and am constantly
        updating my knowledge and skills to stay ahead of industry trends and to
        provide the best work possible.
      </p>
      <a
        class="inline-block bg-blue-500 text-white hover:bg-blue-800 px-4 py-2 mb-2"
        href="/assets/Michael Carillon Resume 2023.pdf"
        download="Michael Carillon Resume 2023"
      >
        <i class="fa-solid fa-download mr-2"></i>Resume PDF
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Experience } from 'models/experience';
import SectionHeading from '~/components/shared/SectionHeading.vue';
import ExperienceCard from '~/components/experience/ExperienceCard.vue';
import experiencesData from '~/assets/data/experiences.json';

const experiences = ref<Experience[]>(experiencesData);
const selectedIndex = ref<number>(experiences.value.length - 1);

const selectedExperience = computed<Experience>(
  () => experiences.value[selectedIndex.value]
);
</script>
