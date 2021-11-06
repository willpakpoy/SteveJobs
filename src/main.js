import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { ObserveVisibility } from "vue-observe-visibility";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.directive("observe-visibility", ObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
