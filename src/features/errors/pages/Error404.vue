<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center text-center px-6"
  >
    <h1 class="text-6xl font-bold text-accent font-mono">404</h1>
    <h2 class="text-4xl font-bold text-gray-200 mt-4">Página No Encontrada</h2>
    <p class="text-gray-400 mt-4 max-w-md">
      Lo sentimos, la página que buscas no existe. Es posible que haya sido
      movida o eliminada.
    </p>
    <router-link
      to="/"
      class="mt-8 border border-accent text-accent rounded px-8 py-3 font-mono hover:bg-accent hover:bg-opacity-10 transition-colors"
    >
      Volver al Inicio
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>
