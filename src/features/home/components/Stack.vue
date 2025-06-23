<template>
  <section id="stack" class="py-24">
    <h2 class="text-3xl font-bold mb-12 text-center">
      <span class="text-accent font-mono mr-4 text-2xl">03.</span> Stack
      Tecnológico
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(category, name) in techStack"
        :key="name"
        class="card-navy p-6 rounded-lg"
      >
        <h3 class="text-xl font-bold text-gray-200 mb-4">{{ name }}</h3>
        <ul class="space-y-2 font-mono text-sm text-gray-400">
          <li v-for="tech in category" :key="tech" class="flex items-center">
            <i class="bi bi-arrow-right-short text-accent mr-2"></i>
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface TechStack {
  [category: string]: string[];
}

const techStack = ref<TechStack>({
  Backend: [
    "Node.js & Express",
    "PHP & Yii Framework 2",
    "Java & Spring Boot",
    "Sequelize & Entity Framework",
    "API RESTful & Socket.io",
  ],
  "Bases de Datos": [
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Firebase Firestore",
    // "MongoDB",
  ],
  Frontend: [
    "Vue.js (2 y 3)",
    "Angular",
    "TypeScript & JavaScript",
    "Tailwind CSS & Bootstrap",
    "CSS3 & AJAX",
  ],
  Móvil: ["Flutter & Dart", "Android Nativo (Java)"],
  "Infraestructura y Servicios": [
    "Google Cloud Platform",
    "Firebase Suite",
    "Git & GitHub & GitLab",
  ],
});
</script>
