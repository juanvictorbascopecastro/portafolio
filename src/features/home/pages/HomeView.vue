<template>
  <NavBar />

  <main class="px-6 md:px-12 lg:px-24 py-20">
    <section id="inicio" class="min-h-screen flex flex-col justify-center">
      <h1 class="text-lg text-accent font-mono mb-4">Hola, mi nombre es</h1>
      <h2 class="text-4xl md:text-7xl font-bold text-gray-200">
        Juan Victor Bascope Castro.
      </h2>
      <h3 class="text-3xl md:text-6xl font-bold text-gray-400 mt-2">
        Construyo soluciones para la web y móviles.
      </h3>
      <p class="mt-6 max-w-xl text-gray-400">
        Soy un Ingeniero de Sistemas y desarrollador de software enfocado en el
        backend, con sólida experiencia en la creación de API RESTful, gestión
        de bases de datos y desarrollo de aplicaciones móviles multiplataforma.
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
          href="#proyectos"
          class="border border-accent text-accent rounded px-6 py-3 font-mono hover:bg-accent hover:bg-opacity-10 transition-colors"
        >
          Ver mis proyectos
        </a>
      </div>
    </section>

    <section id="sobre-mi" class="py-24">
      <h2 class="text-3xl font-bold mb-8 flex items-center">
        <span class="text-accent font-mono mr-4 text-2xl">01.</span> Sobre Mí
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div class="md:col-span-3 text-gray-400 space-y-4">
          <p>
            Mi experiencia se centra en el desarrollo backend, creando
            soluciones escalables con Node.js y Express, y en la construcción de
            aplicaciones móviles con Flutter. Disfruto enfrentando retos que me
            permiten explorar nuevas herramientas y transformar ideas en
            productos de alto impacto.
          </p>
          <p>
            He trabajado con herramientas de Google Cloud Platform para
            optimizar la infraestructura y los servicios de las aplicaciones. A
            lo largo de mi carrera, he aplicado metodologías ágiles como SCRUM
            para mejorar la eficiencia y colaboración en los equipos de
            desarrollo.
          </p>
          <p>
            Creo firmemente en seguir buenas prácticas como Clean Architecture,
            ya que son esenciales para garantizar la escalabilidad y el
            mantenimiento a largo plazo de las aplicaciones, asegurando
            soluciones robustas y adaptables.
          </p>
        </div>
        <div class="md:col-span-2 flex justify-center">
          <div class="w-64 h-64 rounded-lg relative group">
            <div
              class="absolute -inset-0.5 bg-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              src="@/assets/profile.jpg"
              alt="Juan Victor Bascope Castro"
              class="relative w-full h-full object-cover rounded-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>

    <Experience />
    <Stack />
    <Project />
    <Contact />
  </main>

  <MyFooter />
</template>

<script setup lang="ts">
import MyFooter from "@/features/home/components/Footer.vue";
import NavBar from "@/features/home/components/NavBar.vue";

import Contact from "../components/Contact.vue";
import Project from "../components/Project.vue";
import Stack from "../components/Stack.vue";
import Experience from "../components/Experience.vue";
</script>

<style>
/* Estilos adicionales si fueran necesarios */
.card-navy {
  background-color: #112240;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-navy:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
}

.text-accent {
  color: #64ffda;
}

.bg-accent {
  background-color: #64ffda;
}

.border-accent {
  border-color: #64ffda;
}
</style>
