<template>
  <section id="contacto" class="py-24 text-center max-w-2xl mx-auto px-4">
    <h2 class="font-mono text-accent">
      <span class="text-2xl">05.</span> ¿Cuál es el siguiente paso?
    </h2>
    <h3 class="text-5xl font-bold text-gray-200 mt-4 mb-6">
      Ponte en Contacto
    </h3>
    <p class="text-gray-400 mb-8">
      Actualmente estoy abierto a nuevas oportunidades y mi bandeja de entrada
      está siempre abierta. Si tienes alguna pregunta o simplemente quieres
      saludar, ¡haré todo lo posible por responderte!
    </p>

    <!-- Botones de contacto directo -->
    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 transition-colors"
      >
        <i class="bi bi-whatsapp text-xl"></i>
        WhatsApp
      </a>
      <a
        :href="mailToLink"
        class="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md px-6 py-3 transition-colors"
      >
        <i class="bi bi-envelope text-xl"></i>
        Enviar Email
      </a>
    </div>

    <!-- Formulario de contacto -->
    <!-- <form v-if="!formSubmitted" @submit.prevent="handleSubmit" class="mt-8">
      <div class="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          v-model="form.name"
          placeholder="Tu Nombre"
          required
          class="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
        <input
          type="email"
          v-model="form.email"
          placeholder="Tu Email"
          required
          class="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
      </div>
      <textarea
        v-model="form.message"
        placeholder="Tu Mensaje"
        rows="5"
        required
        class="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
      ></textarea>

      <button
        type="submit"
        class="border border-accent text-accent rounded px-12 py-4 font-mono hover:bg-accent hover:bg-opacity-10 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
    <div
      v-else
      class="text-center text-accent border border-accent rounded-md p-6"
    >
      <h4 class="text-2xl font-bold">¡Gracias!</h4>
      <p>Tu mensaje ha sido enviado. Te responderé pronto.</p>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface Captcha {
  num1: number;
  num2: number;
  answer: number | null;
}

// --- Datos de contacto ---
const phoneNumber = "+59172874590";
const emailAddress = "juan.victor.bascope.castro@gmail.com";

// --- Computed properties para los enlaces ---
const whatsappLink = computed(() => {
  const message =
    "Hola Juan Víctor, vi tu portafolio y me gustaría contactarte acerca de...";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});

const mailToLink = computed(() => {
  const subject = "Contacto desde tu portafolio";
  const body =
    "Hola Juan Víctor,\n\nVi tu portafolio y me gustaría contactarte acerca de...";
  return `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});

// --- Lógica del Formulario y CAPTCHA ---
const form = reactive<ContactForm>({
  name: "",
  email: "",
  message: "",
});

const captcha = reactive<Captcha>({
  num1: 0,
  num2: 0,
  answer: null,
});

const captchaError = ref<string>("");
const formSubmitted = ref(false);

const generateCaptcha = () => {
  captcha.num1 = Math.floor(Math.random() * 10) + 1;
  captcha.num2 = Math.floor(Math.random() * 10) + 1;
  captcha.answer = null;
  captchaError.value = "";
};

const handleSubmit = () => {
  if (captcha.answer !== captcha.num1 + captcha.num2) {
    captchaError.value = "La verificación es incorrecta. Inténtalo de nuevo.";
    generateCaptcha();
    return;
  }

  // Aquí iría la lógica para enviar el email
  console.log("Formulario enviado:", {
    name: form.name,
    email: form.email,
    message: form.message,
  });
  formSubmitted.value = true;
  captchaError.value = "";
};

// Generar CAPTCHA al montar el componente
generateCaptcha();
</script>
