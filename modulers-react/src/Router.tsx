import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BusinessLayout from "./layouts/BusinessLayout";
import Dummy from "./components/Dummy";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/Home";
import SignUp from "./components/pages/SignUp";
import Root from "./layouts/Root";
import Login from "./components/pages/LogIn";
import Generate from "./components/pages/Generate";

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
        errorElement: <ErrorComponent />,
        element: <Home />,
      },
      {
        path: "generate",
        errorElement: <ErrorComponent />,
        element: <Generate />,
      },
      {
        path: "shop",
        errorElement: <ErrorComponent />,
        element: <Dummy />,
      },
      {
        path: "my-page",
        errorElement: <ErrorComponent />,
        element: <Dummy />,
      },
      {
        path: "order/:id",
        errorElement: <ErrorComponent />,
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
