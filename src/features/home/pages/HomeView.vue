<template>
  <NavBar />

  <main class="px-6 md:px-12 lg:px-24 py-20">
    <Portada />
    <AboutUs />

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
import Contact from "@/features/home/components/Contact.vue";
import Project from "@/features/home/components/Project.vue";
import Stack from "@/features/home/components/Stack.vue";
import Experience from "@/features/home/components/Experience.vue";
import AboutUs from "@/features/home/components/AboutUs.vue";
import Portada from "@/features/home/components/Portada.vue";
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
