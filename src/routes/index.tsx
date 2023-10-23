import { useRoutes } from "react-router-dom";

import publicRoutes from "./public";

function AppRoutes() {
  const element = useRoutes(publicRoutes);

  return element;
}

export default AppRoutes;
