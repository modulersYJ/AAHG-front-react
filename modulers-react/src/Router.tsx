import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BusinessLayout from "./layouts/BusinessLayout";
import Dummy from "./components/Dummy";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Root from "./layouts/Root";
import Login from "./components/pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
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
