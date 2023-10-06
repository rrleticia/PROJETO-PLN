import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/index.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
