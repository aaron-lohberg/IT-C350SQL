import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AdminPatron from "./pages/AdminPatron";
import Register from "./pages/Register";
import Character from "./pages/Character";
import CreateParty from "./pages/CreateParty";
import Party from "./pages/Party";
import Ticket from "./pages/Ticket";
import Patron from "./pages/Patron";
import Parties from "./pages/MyParties";
import CreateTicket from "./pages/CreateTicket";
import PartySearch from "./pages/PartySearch";
import AdminCharacters from "./pages/AdminCharacters";
import AdminPatrons from "./pages/AdminPatrons";
import AdminTickets from "./pages/AdminTickets";
import AdminParties from "./pages/AdminParties";
import CreateCharacter from "./pages/CharacterCreate";
import AdminCharacterAdd from "./components/AdminCharacterAdd";
import AdminCharacterList from "./components/AdminCharacterList";
import AdminCharacterEdit from "./components/AdminCharacterEdit";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { getJwtToken } from "./auth";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const checkAuth = function(to, _, next) {
  const token = getJwtToken();
  if (token === undefined || token === "undefined" || token === null) {
    // redirect to login because we don't have token yet
    next({
      path: "/login",
      params: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
};

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/character/:id", component: Character },
    { path: "/patron/:id", component: Patron },
    { path: "/ticket/:id", component: Ticket },
    { path: "/party/:id", component: Party },
    { path: "/adminpatron/:id", component: AdminPatron },
    { path: "/CreateParty", component: CreateParty},
    { path: "/MyParties", component: Parties},
    { path: "/login", component: Login },
    { path: "/logout", component: Logout },
    { path: "/register", component: Register },
    { path: "/createticket", component: CreateTicket },
    { path: "/partysearch", component: PartySearch },
    { path: "/createcharacter", component: CreateCharacter },
    { path: "/admincharacters", component: AdminCharacters },
    { path: "/adminparties", component: AdminParties },
    { path: "/adminpatrons", component: AdminPatrons },
    { path: "/admintickets", component: AdminTickets },
    {
      path: "/admin",
      component: Admin,
      beforeEnter: checkAuth,
      children: [
        { path: "add", component: AdminCharacterAdd },
        { path: "edit/:id", component: AdminCharacterEdit },
        { path: "", component: AdminCharacterList },
      ],
    },
  ],
});

new Vue({
  data: {color: '#121212'},
  router,
  render: (h) => h(App),
}).$mount("#app");
