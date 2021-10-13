import { createRouter, createWebHistory } from "vue-router";
import routes from "vue-auto-routing";

console.log(routes);

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
