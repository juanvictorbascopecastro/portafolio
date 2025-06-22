<template>
  <div
    class="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
  >
    <h2 class="text-2xl font-bold text-center text-amber-600 mb-6">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
<script setup lang="ts">
const { isLoading } = defineProps<{
  title: string;
  icon?: string;
  isLoading?: boolean;
}>();
</script>
