import Welcome from "../features/welcome/components/Welcome";

const publicRoutes = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <Welcome />,
  },
];

export default publicRoutes;
