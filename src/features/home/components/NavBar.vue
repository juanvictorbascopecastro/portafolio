<template>
  <!-- NAV HEADER -->
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md"
    :class="{
      'lg:bg-opacity-90 lg:backdrop-blur-sm bg-[#0a192f] shadow-lg': scrolled,
      'py-6': !scrolled,
      'py-4': scrolled,
    }"
  >
    <nav
      class="container mx-auto px-6 md:px-2 lg:px-6 flex justify-between items-center"
    >
      <a href="#inicio" class="text-2xl font-bold text-accent font-mono">JV</a>

      <div class="hidden lg:flex items-center space-x-4">
        <!-- Enlaces de navegación -->
        <div class="flex items-center space-x-8 font-mono mr-4">
          <a
            v-for="(link, index) in navLinks"
            :key="link.name"
            href="#"
            @click.prevent="goToSection(link.href)"
            class="text-gray-300 hover:text-accent transition-colors"
          >
            <span class="text-accent">0{{ index + 1 }}.</span> {{ link.name }}
          </a>
        </div>

        <!-- Redes sociales (solo en desktop) -->
        <div class="flex items-center space-x-4 border-l border-gray-700 pl-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-accent transition-colors text-xl"
            :title="social.name"
          >
            <i :class="social.icon"></i>
          </a>
        </div>

        <!-- Botón Descargar CV -->
        <a
          :href="cvPath"
          download="Juan_Victor_Bascope_Castro_CV.pdf"
          class="ml-4 border border-accent text-accent rounded px-4 py-2 font-mono hover:bg-accent hover:bg-opacity-10 transition-colors"
          @click.prevent="downloadCV"
        >
          Descargar CV
        </a>
      </div>

      <!-- Menú móvil -->
      <button @click="menuOpen = !menuOpen" class="lg:hidden z-50">
        <i
          class="bi text-3xl text-accent"
          :class="menuOpen ? 'bi-x' : 'bi-list'"
        ></i>
      </button>

      <!-- MENÚ MÓVIL -->
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-[#0a192f]/95 flex flex-col items-center justify-center lg:hidden"
      >
        <a
          v-for="(link, index) in navLinks"
          :key="link.name"
          href="#"
          @click.prevent="goToSection(link.href)"
          class="text-gray-300 hover:text-accent transition-colors"
        >
          <span class="text-accent">0{{ index + 1 }}.</span> {{ link.name }}
        </a>

        <!-- Redes sociales en móvil -->
        <div class="flex items-center space-x-6 mt-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-accent transition-colors text-2xl"
            :title="social.name"
          >
            <i :class="social.icon"></i>
          </a>
        </div>

        <a
          :href="cvPath"
          download="Juan_Victor_Bascope_Castro_CV.pdf"
          class="mt-6 border border-accent text-accent rounded px-6 py-3 font-mono hover:bg-accent hover:bg-opacity-10 transition-colors"
          @click.prevent="downloadCV"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import myApp from "@/shared/composables";
import { onBeforeUnmount, onMounted, ref } from "vue";

const menuOpen = ref(false);
const scrolled = ref(false);

const { scrollToSection } = myApp();

const goToSection = (id: string) => {
  scrollToSection(id);
  menuOpen.value = false;
};

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Datos de navegación
const navLinks = ref<NavLink[]>([
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Stack", href: "#stack" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
]);

// Enlaces a redes sociales
const socialLinks = ref<SocialLink[]>([
  {
    name: "GitHub",
    url: "https://github.com/juanvictorbascopecastro",
    icon: "bi bi-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juan-victor-4a109b186/",
    icon: "bi bi-linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/juan.victor.bascope.castro/",
    icon: "bi bi-instagram",
  },
]);

const cvPath = ref("/juan_victor_bascope_castro_cv.pdf");

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = cvPath.value;
  link.download = "Juan_Victor_Bascope_Castro_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (menuOpen.value) {
    menuOpen.value = false;
  }
};

// Lógica del scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
