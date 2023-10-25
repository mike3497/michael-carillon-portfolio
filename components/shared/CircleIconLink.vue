<template>
  <a
    class="flex items-center justify-center w-8 h-8 rounded-full active:scale-105 transition-all"
    :class="{
      'bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black':
        variant === CircleIconLinkVariant.BLACK,
      'bg-white text-black hover:bg-black hover:text-white  hover:border-2 hover:border-white':
        variant === CircleIconLinkVariant.WHITE,
    }"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { CircleIconLinkVariant } from '@/types/circleIconLinkVariant';

defineProps({
  variant: {
    type: String as PropType<CircleIconLinkVariant>,
    required: true,
  },
});
</script>
