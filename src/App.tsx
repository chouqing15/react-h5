import { RouterProvider } from "react-router-dom";
import router from "./routerConfig";

export default function App() {
  return <RouterProvider router={router} />;
}
