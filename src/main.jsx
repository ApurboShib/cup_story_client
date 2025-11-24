import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root/Root";
import Home from "./components/Home/Home";
import AddCoffee from "./components/AddCoffee/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        // loader: () => fetch("http://localhost:8080/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
