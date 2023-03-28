import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BusinessLayout from "./BusinessLayout";
import Dummy from "./components/Dummy";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "generate",
        element: <Dummy />,
      },
      {
        path: "shop",
        element: <Dummy />,
      },
      {
        path: "my-page",
        element: <Dummy />,
      },
      {
        path: "order/:id",
        element: <Dummy />,
      },
    ],
  },
  {
    path: "/business",
    element: <BusinessLayout />,
  },
]);

export default router;
