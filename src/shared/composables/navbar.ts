import { ref } from "vue";

const myNavbar = () => {
  const showMenuPlanes = ref<boolean>(false);
  const showMobileMenu = ref<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    showMobileMenu.value = false;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const sectionOffsetTop = section.offsetTop;

    window.scrollTo({
      top: sectionOffsetTop,
      behavior: "smooth",
    });
  };

  return {
    scrollToSection,
    showMenuPlanes,
    showMobileMenu,
  };
};

export default myNavbar;
