<template>
  <section id="sobre-mi" class="py-24">
    <h2 class="text-3xl font-bold mb-8 flex items-center">
      <span class="text-accent font-mono mr-4 text-2xl">01.</span> Perfil
      profecional
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
      <div class="md:col-span-3 text-gray-400 space-y-4">
        <p>
          Soy ingeniero en sistemas con experiencia en <strong>ERP</strong>. Mi
          portafolio incluye aplicaciones para el sector empresarial, proyectos
          que permiten gestionar procesos del negocio, automatizar procesos,
          buscar soluciones. Trabajé en aplicaciones de
          <strong>API RESTful</strong> robustas. Cuento con experiencia en la
          integración de servicios externos que permiten complementar y ampliar
          las funcionalidades de los sistemas mediante servicios externos como
          <strong
            >API REST (SIAT, Impuestos Nacionales), WhatsApp API, pasarelas de
            pago, Google Maps</strong
          >, entre otros. También tengo experiencia en el diseño de
          <strong>estructuras de datos estandarizadas para</strong> proyectos
          basados en <strong>API REST</strong>. Tengo experiencia en desarrollo
          del lado del servidor con
          <strong>Node.js, Java (Spring Boot) y PHP</strong>, además de
          comunicación en tiempo real con <strong>Socket.io</strong>. Más allá
          del backend, desarrollo aplicaciones móviles multiplataforma con
          <strong>Flutter y Android nativo</strong>, y creo interfaces web
          modernas con <strong>Vue.js y Angular</strong>. Utilizando
          metodologías ágiles como <strong>Scrum</strong>, contribuyo en todo el
          ciclo de vida del proyecto de software:
          <strong>análisis, diseño, implementación y soporte</strong>.
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
