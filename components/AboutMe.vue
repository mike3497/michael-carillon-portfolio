<template>
  <div
    id="about-me"
    class="container my-4 grid grid-cols-1 md:grid-cols-2 gap-4"
  >
    <div>
      <SectionHeading>//About Me</SectionHeading>
      <div class="prose">
        <p>Hey, I am Michael Carillon.</p>
        <p>
          I'm just a web developer with over {{ yearsOfExperience }} years of
          professional experience who's all about coding and living in
          Cleveland, OH.
        </p>
        <p>
          My web development journey started because I was super into video game
          development when I was younger. I ended up at The University of Akron,
          where I studied Computer Information Systems. They taught me some
          programming basics, which turned out to be a big help when I got into
          web development.
        </p>
        <p>
          In my free time, you'll usually find me hanging out with my awesome
          wife, Katherine. We're both big fans of traveling and exploring,
          whether it's checking out cool museums, hitting up parks, or sampling
          different breweries.
        </p>
        <p>
          Oh, and I can't forget my buddy Brutus, a {{ brutusAge }}-year-old
          Bluetick Coonhound mix. We go on hikes and strolls together, and he's
          basically my sidekick for all things outdoorsy.
        </p>
      </div>
    </div>
    <div>
      <img
        class="object-cover aspect-square border-2 border-black"
        src="/images/RDPMC_7864.jpg"
        alt="Michael Carillon Headshot"
      />
    </div>
    <!-- <div class="max-w-xl mb-4">
      
    </div> -->
    <!-- <div class="grid grid-cols-3 gap-4">
      <img
        class="object-cover aspect-square"
        src="/assets/images/RDPMC_7864.jpg"
      />
      <img
        class="object-cover aspect-square"
        src="/assets/images/Engagement-27.jpg"
      />
      <img
        class="object-cover aspect-square"
        src="/assets/images/Engagement-67.jpg"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '@/components/shared/SectionHeading.vue';
import dayjs from 'dayjs';

const brutusAge = computed<number>(() => {
  const birthDate = dayjs('2019-08-14');
  const currentDate = dayjs();

  let age = currentDate.diff(birthDate, 'year');

  if (currentDate.isBefore(birthDate.add(age, 'year'), 'day')) {
    age--;
  }

  return age;
});

const yearsOfExperience = computed<number>(() => {
  const startDate = dayjs('10/01/2020');
  const currentDate = dayjs();

  return currentDate.diff(startDate, 'year');
});
</script>
