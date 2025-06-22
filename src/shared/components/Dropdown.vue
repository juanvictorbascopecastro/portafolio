<template>
  <div class="relative inline-block text-left w-full">
    <div>
      <button
        type="button"
        class="inline-flex justify-between items-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500"
        id="options-menu"
        aria-haspopup="true"
        :aria-expanded="isOpen ? 'true' : 'false'"
        @click="toggleDropdown"
      >
        {{ selectedLabel || placeholder }}
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10 max-h-60 overflow-y-auto"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1" role="none">
          <a
            v-for="(option, index) in options"
            :key="index"
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            :class="{ 'bg-gray-100 dark:bg-gray-600': isSelected(option) }"
            role="menuitem"
            @click.prevent="selectOption(option)"
          >
            {{ getOptionLabel(option) }}
          </a>
          <p
            v-if="options.length === 0"
            class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400"
          >
            No hay opciones disponibles
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

// Define las props del componente Dropdown
const props = defineProps<{
  modelValue: any; // El valor seleccionado
  options: any[]; // Array de opciones
  optionLabel: string; // La clave para el texto a mostrar
  optionValue: string; // La clave para el valor real
  placeholder?: string; // Texto placeholder
}>();

// Define los eventos que el componente puede emitir
const emit = defineEmits(["update:modelValue", "change"]);

// Estado reactivo para controlar la visibilidad del dropdown
const isOpen = ref(false);

// Ref para el valor interno seleccionado
const internalValue = ref(props.modelValue);

// Propiedad computada para obtener la etiqueta de la opción seleccionada
const selectedLabel = computed(() => {
  if (internalValue.value === null || internalValue.value === undefined) {
    return null;
  }
  const selectedOption = props.options.find(
    (opt) => opt[props.optionValue] === internalValue.value
  );
  return selectedOption ? selectedOption[props.optionLabel] : null;
});

// Método para alternar la visibilidad del dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Método para seleccionar una opción
const selectOption = (option: any) => {
  internalValue.value = option[props.optionValue];
  emit("update:modelValue", internalValue.value);
  emit("change", option); // Emitir el evento change con la opción completa
  isOpen.value = false; // Cerrar el dropdown después de seleccionar
};

// Método para obtener la etiqueta de una opción
const getOptionLabel = (option: any) => {
  return option[props.optionLabel];
};

// Método para verificar si una opción está seleccionada
const isSelected = (option: any) => {
  return option[props.optionValue] === internalValue.value;
};

// Cerrar el dropdown si se hace clic fuera
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".relative.inline-block.text-left")) {
    isOpen.value = false;
  }
};

// Observar cambios en modelValue para actualizar internalValue
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  }
);

// Añadir y remover el listener para clics fuera
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Puedes añadir estilos específicos aquí si es necesario, pero Tailwind CSS ya cubre la mayoría */
</style>
