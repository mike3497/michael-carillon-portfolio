<template>
  <div id="about-me" class="container mx-auto my-4 px-4">
    <div class="max-w-xl mb-4">
      <SectionHeading>//About Me</SectionHeading>
      <p class="mb-2">Hey, I am Michael Carillon.</p>
      <p class="mb-2">
        I am a passionate full-stack web developer based in Cleveland, OH.
      </p>
      <p class="mb-2">
        I got into web development after exploring video game development when I
        was younger. I attended The University of Akron majoring in Computer
        Information Systems. There I learned the basics of programming and used
        that knowledge to help me learn web development.
      </p>
      <p class="mb-2">
        In my spare time, I love to be with my fiancée Katherine and explore. We
        both love to travel and go to new places like museums, parks, and
        breweries.
      </p>
      <p>
        I also have a 3 year old bluetick coonhound mix named Brutus who I love
        to go on hikes and walks with.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/shared/SectionHeading.vue';
</script>
