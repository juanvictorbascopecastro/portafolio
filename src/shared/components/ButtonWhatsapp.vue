<template>
  <div>
    <button
      class="z-20 text-white flex flex-col shrink-0 grow-0 justify-around fixed bottom-0 right-5 rounded-lg mr-1 mb-5 lg:mb-5 xl:mb-10"
    >
      <div
        class="p-3 px-4 rounded-full whatsapp shadow-highlight bg-green-500 hover:bg-green-600 pulse-effect"
        @click="togglePopup"
      >
        <i class="bi bi-whatsapp text-2xl"></i>
      </div>
    </button>

    <div
      class="fixed bottom-24 right-5 shadow-2xl rounded-lg transition-all duration-300"
      v-show="showPopup"
      @click="closePopup"
    >
      <div class="bg-gray-800 rounded-t-lg p-4">
        <h1 class="text-lg font-semibold mb-2 text-gray-200">
          Iniciar una conversación
        </h1>
        <p class="text-gray-400 text-xs">
          Hola! Haz click en uno de nuestros <br />
          miembros para hablar en
          <span class="font-bold">WhatsApp</span>
        </p>
      </div>
      <div class="p-2 bg-white">
        <span class="text-gray-400 text-xs"
          >Usualmente respondemos en minutos.</span
        >
        <div
          class="flex flex-col p-4 mt-2 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105"
          v-for="(item, i) in contacts"
          :key="i"
          @click="whatsapp(item.phone)"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center mr-auto">
              <div class="inline-flex w-12 h-12">
                <img
                  src="./../assets/whatsapp.png"
                  alt="aji"
                  class="relative w-12 h-12"
                /><span
                  class="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"
                ></span>
                <span></span>
              </div>

              <div class="flex flex-col ml-3">
                <div class="font-medium leading-none text-gray-100">
                  {{ item.name }}
                </div>
                <p class="text-sm text-gray-500 leading-none mt-1">
                  {{ item.rol }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      class="fixed bottom-5 left-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      @click="scrollToTop"
    >
      ↑
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { whatsapp } from "@/helpers/social-media";

export default {
  setup() {
    const showPopup = ref(false);

    const contacts = [
      {
        name: "José David",
        phone: "+59168660938",
        rol: "Agente de ventas",
      },
      {
        name: "Roxana Loayza",
        phone: "+59168660938",
        rol: "Agente de ventas",
      },
      {
        name: "Orlando Fernández",
        phone: "+59179309361",
        rol: "Agente de ventas",
      },
    ];

    const togglePopup = () => {
      showPopup.value = !showPopup.value;
    };

    const closePopup = () => {
      showPopup.value = false;
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".fixed")) {
        closePopup();
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    return {
      togglePopup,
      showPopup,
      closePopup,
      contacts,
      whatsapp,
      scrollToTop,
    };
  },
};
</script>

<style>
.whatsapp {
  --tw-shadow-color: rgba(37, 211, 102, 0.5);
  --tw-shadow: #25d366;
}
.shadow-highlight {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.pulse-effect {
  position: relative;
  overflow: hidden;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
