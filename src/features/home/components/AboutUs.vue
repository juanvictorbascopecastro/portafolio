<template>
  <section id="sobre-mi" class="py-24">
    <h2 class="text-3xl font-bold mb-8 flex items-center">
      <span class="text-accent font-mono mr-4 text-2xl">01.</span> Sobre Mí
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
      <div class="md:col-span-3 text-gray-400 space-y-4">
        <p>
          Mi experiencia se centra en el desarrollo backend, creando soluciones
          escalables con Node.js y Express, y en la construcción de aplicaciones
          móviles con Flutter. Disfruto enfrentando retos que me permiten
          explorar nuevas herramientas y transformar ideas en productos de alto
          impacto.
        </p>
        <p>
          He trabajado con herramientas de Google Cloud Platform para optimizar
          la infraestructura y los servicios de las aplicaciones. A lo largo de
          mi carrera, he aplicado metodologías ágiles como SCRUM para mejorar la
          eficiencia y colaboración en los equipos de desarrollo.
        </p>
        <p>
          Creo firmemente en seguir buenas prácticas como Clean Architecture, ya
          que son esenciales para garantizar la escalabilidad y el mantenimiento
          a largo plazo de las aplicaciones, asegurando soluciones robustas y
          adaptables.
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
