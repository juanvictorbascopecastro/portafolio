<script setup lang="ts">
import NavBarComponent from "@/features/home/components/NavBar.vue";
import FooterComponents from "../../features/home/components/Footer.vue";
</script>

<template>
  <div class="relative">
    <NavBarComponent />
    <main class="pt-16 px-4 min-h-screen bg-gray-50 dark:bg-gray-950">
      <router-view />
    </main>
    <FooterComponents />
    <!-- <ButtonWhatsapp /> -->
  </div>
</template>
