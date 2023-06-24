import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// svg 插件
import "virtual:svg-icons-register";
const app = createApp(App);

app.use(createPinia());
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
