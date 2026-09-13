<template>
  <section id="inicio" class="min-h-screen flex flex-col justify-center">
    <h1 class="text-lg text-accent font-mono mb-4">Hola, mi nombre es</h1>
    <h2 class="text-4xl md:text-7xl font-bold text-gray-200">
      Juan Victor Bascope Castro.
    </h2>
    <h3 class="text-2xl md:text-6xl font-bold text-gray-400 mt-2">
      Desarrollador full stack para entornos empresariales.
    </h3>
    <p class="mt-6 max-w-xl text-gray-400">
      Soy un profesional proactivo y dinámico que se adapta fácilmente a
      entornos de trabajo colaborativos. Mi enfoque se centra en comprender a
      fondo los procesos de negocio para planificar, diseñar y ofrecer
      soluciones integrales óptimas.
    </p>
    <div class="mt-8 flex items-center space-x-6">
      <a
        href="https://github.com/juanvictorbascopecastro"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-accent transition-colors text-2xl"
        ><i class="bi bi-github"></i
      ></a>
      <a
        href=""
        @click.prevent="scrollToSection('#proyectos')"
        class="border border-accent text-accent rounded px-6 py-3 font-mono hover:bg-accent hover:bg-opacity-10 transition-colors"
      >
        Ver mis proyectos
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
import myApp from "@/shared/composables";
const { scrollToSection } = myApp();
</script>
