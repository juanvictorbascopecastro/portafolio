<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click.self="$emit('close')"
  >
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full p-4 transition-all duration-300"
      :class="modalSizeClasses"
    >
      <div
        class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3"
      >
        <div class="flex items-center">
          <i v-if="icon" :class="icon" class="mr-2"></i>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
            {{ title }}
          </h3>
        </div>
        <button
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="mb-4 max-h-[70vh] overflow-y-auto" v-if="!isLoading">
        <slot name="body" />
      </div>

      <div v-if="isLoading" class="flex justify-center items-center h-32">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"
        ></div>
      </div>

      <div
        class="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700"
      >
        <button
          v-if="showCloseButton"
          @click="$emit('close')"
          class="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          {{ closeButtonText }}
        </button>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

const props = withDefaults(
  defineProps<{
    title: string;
    icon?: string;
    isLoading?: boolean;
    size?: ModalSize;
    showCloseButton?: boolean;
    closeButtonText?: string;
  }>(),
  {
    size: "md",
    isLoading: false,
    showCloseButton: true,
    closeButtonText: "Cerrar",
  }
);

const modalSizeClasses = computed(() => {
  const sizeMap: Record<ModalSize, string> = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full w-full h-full m-4",
  };
  return sizeMap[props.size];
});

defineEmits<{
  (e: "close"): void;
}>();
</script>
