import { createRouter, createWebHistory } from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import("@/layouts/" + layout + ".vue");
});

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",

      // Pass <RouterLayout> as the route component
      component: RouterLayout,

      // All child components will be applied with corresponding layout component
      children: routes,
    },
  ],
});

export default router;
