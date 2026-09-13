<template>
  <section id="sobre-mi" class="py-24">
    <h2 class="text-3xl font-bold mb-8 flex items-center">
      <span class="text-accent font-mono mr-4 text-2xl">01.</span> Sobre Mí
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
      <div class="md:col-span-3 text-gray-400 space-y-4">
        <p>
          Soy un Desarrollador de Software con más de 5 años de experiencia, enfocado en el desarrollo backend y creación de soluciones escalables. Me especializo en <strong>Node.js, Express, Java (Spring Boot)</strong> y <strong>PHP</strong>, implementando funcionalidades en tiempo real con Socket.io y Google Cloud Functions.
        </p>
        <p>
          Cuento también con experiencia en el desarrollo móvil, iniciando con <strong>Android nativo</strong> y evolucionando hacia soluciones multiplataforma con <strong>Flutter</strong> para Android e iOS. En el frontend, trabajo con <strong>Vue.js (2 y 3)</strong> y <strong>Angular</strong> creando interfaces modernas y responsivas.
        </p>
        <p>
          Creo firmemente en seguir buenas prácticas, aplicar <strong>Clean
          Architecture</strong> y metodologías ágiles como <strong>SCRUM</strong>, participando en todo el ciclo de vida de proyectos de software para asegurar soluciones robustas, mantenibles y adaptables a largo plazo.
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
</template>
