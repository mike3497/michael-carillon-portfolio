<template>
  <div class="bg-zinc-100 p-4">
    <div class="mb-4">
      <p>{{ experience.employer }}</p>
      <h1 class="font-bold text-lg">{{ experience.jobTitle }}</h1>
      <p>{{ startDate }} - {{ endDate }}</p>
    </div>
    <div v-html="experience.content"></div>
  </div>
</template>

<script setup lang="ts">
import { Experience } from '@/models/experience';
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
</script>
