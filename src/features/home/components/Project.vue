<template>
  <section id="proyectos" class="py-24">
    <h2 class="text-3xl font-bold mb-8 flex items-center">
      <span class="text-accent font-mono mr-4 text-2xl">04.</span> Proyectos
      desarrollados
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="card-navy rounded-lg p-6 flex flex-col"
      >
        <div class="flex justify-between items-center mb-4">
          <i class="bi bi-folder-fill text-4xl text-accent"></i>
          <div class="flex items-center">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-2xl text-gray-400 hover:text-accent transition-colors mr-3 tooltip-container"
            >
              <i class="bi bi-github"></i>
              <span class="tooltip-text">Ver código en GitHub</span>
            </a>
            <template v-if="project.links && project.links.length > 0">
              <a
                v-for="(link, index) in project.links"
                :key="index"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-2xl text-gray-400 hover:text-accent transition-colors ml-2 tooltip-container"
              >
                <i :class="getLinkIcon(link.type)"></i>
                <span class="tooltip-text">{{ link.description }}</span>
              </a>
            </template>
            <!-- Fallback for old 'link' property -->
            <a
              v-else-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-2xl text-gray-400 hover:text-accent transition-colors ml-2 tooltip-container"
            >
              <i class="bi bi-box-arrow-up-right"></i>
              <span class="tooltip-text">Ver proyecto en línea</span>
            </a>
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-200 mb-2 mt-4">
          {{ project.title }}
        </h3>
        <p class="text-gray-400 text-sm flex-grow">
          {{ project.description }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2 font-mono text-xs text-gray-500">
          <span
            v-for="tech in project.tags"
            :key="tech"
            class="px-2 py-1 bg-gray-800 rounded"
            >{{ tech }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface ProjectLink {
  url: string;
  type: "web" | "mobile";
  description: string;
}

interface Project {
  title: string;
  description: string;
  link?: string; // Keep for backward compatibility if needed, but 'links' is preferred
  links?: ProjectLink[]; // Array of structured links
  github?: string;
  tags: string[];
}

// Function to determine the icon based on link type
const getLinkIcon = (type: "web" | "mobile"): string => {
  if (type === "web") {
    return "bi bi-globe"; // Icon for web links
  } else if (type === "mobile") {
    return "bi bi-phone"; // Icon for mobile links
  }
  return "bi bi-box-arrow-up-right"; // Default fallback icon
};

const projects = ref<Project[]>([
  {
    title: "Radio Veritas Comarapa",
    description:
      "Aplicación móvil para la transmisión en vivo de la estación de radio, permitiendo a los usuarios escuchar desde cualquier lugar.",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=radio.verita.comarapa",
        type: "mobile",
        description: "Descargar app móvil (Android)",
      },
    ],
    tags: ["Mobile", "Flutter", "Firebase"],
  },
  {
    title: "Sistema Clínico Dental Odontosion",
    description:
      "Sistema de gestión integral para clínicas dentales con app móvil y plataforma web para administración. ",
    links: [
      {
        url: "https://clinica-dental-odontocion.web.app",
        type: "web",
        description: "Ver plataforma web",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.svts.clinicadental",
        type: "mobile",
        description: "Descargar app móvil (Android)",
      },
    ],
    tags: ["Vue 3", "TailwindCSS", "Firebase", "Android Nativo"],
  },
  {
    title: "ioSoftware Facturación",
    description:
      "Aplicación móvil y web para la gestión de facturación electrónica cumpliendo con la normativa boliviana SIAT. ",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.iosoftware.fact",
        type: "mobile",
        description: "Descargar app móvil (Android)",
      },
      { url: "https://ioox.io", type: "web", description: "Ver ioox.io" },
      {
        url: "https://tienda.ioox.io",
        type: "web",
        description: "Ver ioox.io Tienda",
      },
      {
        url: "https://restaurante.ioox.io",
        type: "web",
        description: "Ver ioox.io Restaurante",
      },
    ],
    tags: ["Yii2", "Flutter", "PostgreSQL", "Vue 3"],
  },
  {
    title: "WorkTrack - Control de Empleados",
    description:
      "App móvil para el seguimiento y gestión de la jornada laboral de los empleados en tiempo real.",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=app.employees",
        type: "mobile",
        description: "Descargar app móvil (Android)",
      },
    ],
    tags: ["Android Native", "Firebase", "Google Maps"],
  },
  {
    title: `Reproductor de YouTube, en segundo plano "Proyecto Personal"`,
    description:
      "Permite reproducir videos de YouTube y guardar tus videos preferidos en una base de datos. Cuenta con un reproductor propio que te permite reproduccion en segundo plano.",

    github: "https://github.com/juanvictorbascopecastro/My-Music-Video",
    tags: ["Android Native", "Java", "Firebase", `YouTube "API REST"`],
  },

  {
    title: "SEDEGES - Control de Acogimiento",
    description:
      "Plataforma web para la administración y control de centros de acogida y reintegración social del SEDEGES Chuquisaca.",
    links: [
      {
        url: "https://orbital-nuance-276718.web.app",
        type: "web",
        description: "Ver plataforma web",
      },
    ],
    tags: ["Vue 2", "Firebase"],
  },
  //   {
  //     title: "PediExpress",
  //     description:
  //       "Aplicación web para la gestión de pedidos y entregas, optimizada para una experiencia de usuario rápida y eficiente.",
  //     links: [
  //       {
  //         url: "https://pedidos-6646e.firebaseapp.com",
  //         type: "web",
  //         description: "Ver aplicación web",
  //       },
  //     ],
  //     tags: ["Firebase", "JavaScript"],
  //   },
  {
    title: "Proyecto Física USFX",
    description:
      "Aplicación web y móvil para la gestión de contenido académico y recursos para la materia de Física en la USFX.",
    links: [
      {
        url: "https://fis-200.web.app",
        type: "web",
        description: "Ver plataforma web",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.usfx.fis200",
        type: "mobile",
        description: "Descargar app móvil (Android)",
      },
    ],
    tags: ["JQuery", "Firebase", "Android Nativo"],
  },
  {
    title: "Salva a Gerardo",
    description:
      "Un sencillo y adictivo juego para Android donde el objetivo es guiar a un ave y alcanzar la máxima puntuación posible.",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.app.victor.game1jvbc",
        type: "mobile",
        description: "Descargar juego (Android)",
      },
    ],
    github: "https://github.com/juanvictorbascopecastro/Game1JVBC",
    tags: ["Android Nativo", "Java"],
  },
]);
</script>

<style scoped>
/* Estilos para el tooltip personalizado */
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.tooltip-text {
  visibility: hidden;
  width: max-content;
  max-width: 200px;
  background-color: #1e293b; /* bg-slate-800 */
  color: #f8fafc; /* text-slate-50 */
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.75rem;
  font-weight: normal;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #1e293b transparent transparent transparent;
}
</style>
