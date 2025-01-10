<template>
  <div
    class="bg-blue-600 text-white py-8 border-bottom bottom-2 border-b-black"
  >
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col justify-center gap-1">
          <h3>Hi, I am</h3>
          <h1 class="font-bold uppercase text-4xl">Michael Carillon</h1>
          <h2>Full-stack Web Developer</h2>
          <div class="flex flex-row gap-4 text-sm">
            <a class="underline" href="mailto:mcarillon97@gmail.com">
              mcarillon97@gmail.com
            </a>
            <a class="underline" href="tel:3307037919">(330) 703-7919</a>
          </div>
        </div>
        <img
          class="shadow-solid object-cover object-center aspect-square border-2 border-black"
          src="/images/RDPMC_7864.jpg"
          alt="Michael Carillon Headshot"
        />
      </div>
    </div>
  </div>
  <div class="container py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <SectionHeading>//About Me</SectionHeading>
      <div class="prose">
        <p>Hey, I am Michael Carillon.</p>
        <p>
          I'm just a web developer with over {{ yearsOfExperience }} years of
          professional experience who's all about coding and living in Bay
          Village, OH.
        </p>
        <p>
          My web development journey started because I was super into video game
          development when I was younger. I ended up at The University of Akron,
          where I studied Computer Information Systems. This taught me the
          basics of programming, which turned out to be a big help when I got
          into web development.
        </p>
        <p>
          In my free time, you'll usually find me hanging out with my awesome
          wife, Katherine. We're both big fans of traveling and exploring,
          whether it's checking out cool museums, hitting up parks, or sampling
          different breweries.
        </p>
        <p>
          I can't forget my buddy Brutus, a {{ brutusAge }}-year-old Bluetick
          Coonhound mix. We go on hikes and strolls together, and he's basically
          my sidekick for all things outdoorsy.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <img
        class="shadow-solid object-cover object-bottom aspect-square border-2 border-black"
        src="/images/wedding-photo.jpg"
        alt="Michael and Katherine Carillon Wedding Photo"
      />
    </div>
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
