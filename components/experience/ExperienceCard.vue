<template>
  <div class="bg-zinc-100 p-4 border-2 border-black">
    <p class="mb-2">{{ experience.employer }}</p>
    <div class="flex flex-col gap-4">
      <div v-for="position in experience.positions" class="flex flex-col gap-2">
        <header>
          <h1 class="font-bold text-lg">{{ position.jobTitle }}</h1>
          <p>
            {{ getStartDate(position) }} - {{ getEndDate(position) }} ({{
              getTimeElapsed(position)
            }})
          </p>
        </header>
        <div v-if="position.content" v-html="position.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience, Position } from '@/models/experience';
import dayjs from 'dayjs';

defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true,
  },
});

const getStartDate = (position: Position) => {
  return dayjs(position.startDate).format('MMMM YYYY');
};

const getEndDate = (position: Position) => {
  if (!position.endDate) {
    return 'Present';
  }

  return dayjs(position.endDate).format('MMMM YYYY');
};

const getTimeElapsed = (position: Position) => {
  const startDate = dayjs(position.startDate);
  const endDate = dayjs(position.endDate);

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
};
</script>
