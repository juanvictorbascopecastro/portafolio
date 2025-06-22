import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";
import pinia from "@/shared/stores";
import globalComponents from "./plugins/globalComponents";

import "bootstrap-icons/font/bootstrap-icons.css";
import "nprogress/nprogress.css";

createApp(App).use(pinia).use(router).use(globalComponents).mount("#app");
