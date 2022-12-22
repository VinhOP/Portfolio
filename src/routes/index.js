import Home from "../components/Home";
import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.profile,
    component: Home,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
