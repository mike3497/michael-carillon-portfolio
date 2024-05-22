<template>
  <div class="bg-zinc-100 p-4 border-2 border-black">
    <div class="mb-4">
      <p>{{ experience.employer }}</p>
      <h1 class="font-bold text-lg">{{ experience.jobTitle }}</h1>
      <p>{{ startDate }} - {{ endDate }} ({{ timeElapsed }})</p>
    </div>
    <div v-html="experience.content"></div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/models/experience';
import dayjs from 'dayjs';

const props = defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true,
  },
});

const startDate = computed<string>(() => {
  return dayjs(props.experience.startDate).format('MMMM YYYY');
});

const endDate = computed<string>(() => {
  if (!props.experience.endDate) {
    return 'Present';
  }

  return dayjs(props.experience.endDate).format('MMMM YYYY');
});

const timeElapsed = computed<string>(() => {
  const startDate = dayjs(props.experience.startDate);
  const endDate = dayjs(props.experience.endDate);

  const years = endDate.diff(startDate, 'year');
  const months = endDate.diff(startDate, 'month') % 12;

  const result = [];

  if (years > 0) {
    result.push(`${years} year${years > 1 ? 's' : ''}`);
  }

  if (months > 0) {
    result.push(`${months} month${months > 1 ? 's' : ''}`);
  }

  return result.join(', ');
});
</script>
