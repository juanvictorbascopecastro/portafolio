<template>
  <section id="experiencia" class="py-24">
    <h2 class="text-3xl font-bold mb-12 flex items-center">
      <span class="text-accent font-mono mr-4 text-2xl">02.</span> Experiencia
      Laboral
    </h2>
    <div class="max-w-3xl mx-auto">
      <div
        v-for="(job, index) in experiences"
        :key="index"
        class="relative pl-8 sm:pl-12 py-4 group"
      >
        <div
          class="absolute top-5 left-0 h-full w-0.5 bg-gray-700 group-last:h-0"
        ></div>
        <div
          class="absolute top-5 left-[-5.5px] w-3 h-3 rounded-full bg-gray-600 group-hover:bg-accent transition-colors"
        ></div>

        <div class="card-navy p-6 rounded-lg shadow-lg">
          <p class="text-accent font-mono text-sm mb-1">{{ job.date }}</p>
          <h3 class="text-xl font-bold text-gray-200">
            {{ job.title }}
            <span class="text-accent">@ {{ job.company }}</span>
          </h3>
          <ul class="mt-4 space-y-2 text-gray-400 text-sm list-disc pl-5">
            <li v-for="desc in job.descriptions" :key="desc">{{ desc }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface Experience {
  date: string;
  title: string;
  company: string;
  descriptions: string[];
}

const experiences = ref<Experience[]>([
  {
    date: "Junio 2024 - Actualidad",
    title: "Backend Developer / Mobile Developer",
    company: "ioSoftware",
    descriptions: [
      "Actualmente asumo un rol con mayor responsabilidad en el desarrollo de proyectos.",
      "Contribuyo en la construcción de APIs REST utilizando Yii2 y Java Spring Boot con bases de datos PostgreSQL. ",
      "Participo activamente en el desarrollo de aplicaciones móviles multiplataforma con Flutter. ",
      "Colaboro en tareas de frontend con Vue 3 y Typescript para aportar soluciones integrales. ",
    ],
  },
  {
    date: "Octubre 2023 - Mayo 2024",
    title: "Desarrollo de Software",
    company: "SVTS",
    descriptions: [
      "Desarrollé un sistema de gestión para clínicas dentales aplicando una metodología ágil que permitió iteraciones rápidas y entregas continuas. Implementé una aplicación móvil en Android nativo y una interfaz web con Vue.js 3 y Tailwind CSS",
      "Utilicé servicios de Firebase —incluyendo Firestore, Authentication, Hosting, Storage y Cloud Functions— para construir una solución escalable, segura y orientada al usuario.",
    ],
  },
  {
    date: "Marzo 2022 - Septiembre 2022",
    title: "Desarrollo Web Backend",
    company: "PIAR BOLIVIA",
    descriptions: [
      "Colaboré en el desarrollo de una API RESTful para un sistema de laboratorios clínicos usando Node.js, Express y Sequelize con MySQL. ",
      "Participé en todo el ciclo de vida del proyecto, desde la arquitectura hasta la implementación y pruebas. ",
    ],
  },
  {
    date: "Marzo 2022 - Junio 2022",
    title: "Desarrollo de Aplicaciones Web",
    company: "INFOX TECNOLOGIA",
    descriptions: [
      "Desarrollé un sistema de gestión contable en modalidad remota utilizando Angular y Entity Framework Core con SQL Server. ",
      "Participé en el diseño técnico, codificación y despliegue completo del sistema. ",
    ],
  },
  {
    date: "2019 - 2020",
    title: "Mantenimiento y Desarrollo Web",
    company: "DYA TECHNOLOGY",
    descriptions: [
      "Diseñé y desarrollé sitios web y aplicaciones para múltiples clientes con Vue.js 2, Node.js, Express y bases de datos Firebase y PostgreSQL. ",
      "Participé en proyectos de desarrollo móvil nativo para Android. ",
    ],
  },
  {
    date: "2019",
    title: "Pasante",
    company: "Universidad San Francisco Xavier de Chuquisaca",
    descriptions: [
      "Desarrollé una aplicación móvil Android nativa en Java, con base de datos en Firebase, para una feria universitaria, con el objetivo de prevenir la copia durante exámenes; el proyecto fue premiado por su innovación y funcionalidad",
      "Continué el desarrollo del sistema en la pasantía, implementando una aplicación web complementaria para la gestión de exámenes. ",
    ],
  },
]);
</script>
