import { createRouter, createWebHistory } from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import("@/layouts/" + layout + ".vue");
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",

      // Pass <RouterLayout> as the route component
      component: RouterLayout,

      // All child components will be applied with corresponding layout component
      children: routes.map((route) => {
        if ((route.path as string).endsWith("?")) {
          route.path = route.path.slice(0, -1);
          return route;
        }
        return route;
      }),
    },
  ],
});

export default router;
