/*
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-04 11:47:32
 * @Description:
 *
 */
// 1.Create APP
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 2.Components

// router
import router from "./router/index";
app.use(router);

// store
import store from "./store/index";
app.use(store);

// ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

// highlight
import "highlight.js/styles/github.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
app.use(hljsVuePlugin);

// 3.Mount DOM
app.mount("#app");
