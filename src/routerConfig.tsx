import { createBrowserRouter, Outlet } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const routerConfig = [
  {
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;
