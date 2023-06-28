<template>
  <a
    :href="to"
    class="flex items-center justify-center w-8 h-8 text-white border border-white hover:text-zinc-900 hover:bg-white rounded-full"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
