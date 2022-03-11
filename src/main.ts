if (process.env.NODE_ENV != "production") {
  var VConsole = require("vconsole");
  const vConsole = new VConsole();
}

import Vue from "vue";
import App from "./App.vue";

import "windi.css";

import VueCompositionAPI from "@vue/composition-api";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(VueCompositionAPI);
Vue.use(VueRouter);
Vue.use(Vuex);

//CEP 库-------------------------------------
if (typeof window.__adobe_cep__ !== "undefined") {
  // @ts-ignore
  window.cs = new CSInterface();
  function persistent() {
    // @ts-ignore
    const event = new CSEvent(); //创建一个事件
    event.type = "com.adobe.PhotoshopPersistent"; //注册持久化运行事件
    event.scope = "APPLICATION";
    // @ts-ignore
    event.extensionId = window.cs.getExtensionID(); // 我们的扩展 ID
    // @ts-ignore
    window.cs.dispatchEvent(event); //发送事件让宿主持久化运行我们的扩展
  }
  process.env.NODE_ENV === "production" && persistent();
} else {
  console.info("running without CEP!");
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
