import Vue from "vue";
import VueRouter from "vue-router";
import Lobby from "../views/Lobby.vue";
import Exhibition from "../views/Exhibition.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lobby",
    component: Lobby,
  },
  {
    path: "/exhibition",
    name: "Exhibition",
    component: Exhibition,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
