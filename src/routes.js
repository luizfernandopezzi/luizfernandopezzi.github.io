import Vue from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Projects from "./views/Projects.vue";
import VueRouter from "vue-router";

//Passando as rotas que configuramos para o VueRouter. Para isso, vamos importar routes de routes.js. Tem que vir entre chaves, porque não é default
Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    nome: "Início",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    nome: "Sobre",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    nome: "Projetos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    nome: "Contatos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    component: Contact,
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});