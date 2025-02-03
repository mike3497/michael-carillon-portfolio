<template>
  <div class="bg-blue-600 text-white py-8 border-b-2 border-b-black">
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
  <div class="container py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <SectionHeading>//About Me</SectionHeading>
      <div class="flex flex-col gap-2 leading-6">
        <p>
          I'm a web developer with over {{ yearsOfExperience }} years of
          professional experience. I'm passionate about coding and live in Bay
          Village, Ohio. My interest in web development grew from my early
          fascination with video game development, which led me to study
          Computer Information Systems at The University of Akron.
        </p>
        <p>
          When I'm not coding, I enjoy spending time with my wife, Katherine. We
          love traveling and exploring new places, from museums and parks to
          local breweries. My other constant companion is Brutus, my
          five-year-old Bluetick Coonhound mix. We're always up for a hike or
          walk, and he's my go-to adventure buddy.
        </p>
      </div>
    </div>
    <img
      class="shadow-solid object-cover object-bottom aspect-square border-2 border-black"
      src="/images/wedding-photo.jpg"
      alt="Michael and Katherine Carillon Wedding Photo"
    />
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
