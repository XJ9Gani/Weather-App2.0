import { CitySearchForm, AboutAppPage } from "../pages";
import { useRoutes } from "react-router-dom";
export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <CitySearchForm /> },
    { path: "/about", element: <AboutAppPage /> },
  ]);

  return routes;
}
