import Modal from "@/shared/components/Modal.vue";
import type { App } from "vue";

export default {
  install(app: App) {
    app.component("Modal", Modal);
  },
};
