import Home from "../../modules/Home";
import FetchView from "../../modules/FetchView";

const publicRoutes = [
  {
    component: Home,
    exact: true,
    path: "/",
    id: "home"
  },
  {
    component: FetchView,
    exact: true,
    path: "/fetch",
    id: "fetch"
  }
];

export default publicRoutes;
