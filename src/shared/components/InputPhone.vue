<template>
  <div class="w-full">
    <input
      name="phone"
      class="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150 ease-in-out"
      type="tel"
      autocomplete="off"
      id="telephone"
      :disabled="disabled"
      v-model="input"
      @keypress.enter.prevent="$emit('keyPress', $event.target.value)"
    />
  </div>
</template>

<script>
// intlTelInput
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils";

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    // Cambiamos 'value' por 'modelValue' para que funcione con v-model en Vue 3
    modelValue: {
      type: Object,
      default: null,
    },
    required: { type: Boolean, default: false },
  },
  data() {
    return {
      libInput: null,
    };
  },
  // Cambiamos 'setValue' por 'update:modelValue'
  emits: ["update:modelValue", "keyPress"],
  computed: {
    input: {
      get() {
        if (!this.libInput) return "";

        // Usamos modelValue en lugar de value
        if (this.modelValue?.number) {
          this.libInput.setNumber(this.modelValue.number);
          return this.libInput.getNumber(
            intlTelInputUtils.numberFormat.NATIONAL
          );
        }
        return "";
      },
      set(nuevoValor) {
        const data = {
          number: this.libInput.getNumber(
            intlTelInputUtils.numberFormat.INTERNATIONAL
          ),
          isValid: this.libInput.isValidNumber(),
          country: this.libInput.getSelectedCountryData().dialCode,
        };
        // Emitimos 'update:modelValue'
        this.$emit("update:modelValue", data);
      },
    },
  },
  mounted() {
    if (!this.libInput) this.initPhone();
    // Usamos modelValue en lugar de value
    if (this.modelValue?.number) {
      this.libInput.setNumber(this.modelValue.number);
    }
  },
  methods: {
    initPhone() {
      const input = document.querySelector("#telephone");
      if (!input) return;
      this.libInput = intlTelInput(input, {
        preferredCountries: ["bo", "us"],
        showFlags: true,
        initialCountry: "bo",
        nationalMode: true,
        formatOnDisplay: true,
        utilsScript: "intl-tel-input/build/js/utils.js",
      });
    },
  },
  watch: {
    // Escuchamos 'modelValue.number' en lugar de 'value.number'
    "modelValue.number"(newNumber) {
      if (
        this.libInput &&
        newNumber !==
          this.libInput.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL)
      ) {
        this.libInput.setNumber(newNumber);
      }
    },
  },
};
</script>

<style>
/* Estilos específicos para intl-tel-input */
.intl-tel-input {
  @apply w-full;
}
.intl-tel-input .iti__flag-container {
  @apply !border-r !border-gray-300 dark:!border-gray-600 !bg-gray-50 dark:!bg-gray-600;
}
.intl-tel-input .iti__country-list {
  @apply !bg-white dark:!bg-gray-700 !text-gray-800 dark:!text-gray-100 !border !border-gray-300 dark:!border-gray-600;
}
.intl-tel-input .iti__country.iti__highlight {
  @apply !bg-amber-100 dark:!bg-amber-800 !text-amber-800 dark:!text-amber-100;
}
</style>
