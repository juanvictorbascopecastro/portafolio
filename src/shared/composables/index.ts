import { onMounted, ref } from "vue";

const myApp = () => {
  const isDark = ref<boolean>(true);

  onMounted(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement?.classList.contains("dark")) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
  });

  const modeDark = (): void => {
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;

    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      isDark.value = false;
    } else {
      htmlElement.classList.add("dark");
      isDark.value = true;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { modeDark, isDark, scrollToSection };
};

export default myApp;
