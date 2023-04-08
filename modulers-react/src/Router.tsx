import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BusinessLayout from "./layouts/BusinessLayout";
import Dummy from "./components/Dummy";
import ErrorComponent404 from "./components/errors/ErrorComponent404";
import Home from "./components/Home";
import SignUp from "./components/pages/SignUp";
import Root from "./layouts/Root";
import Login from "./components/pages/LogIn";
import Generate from "./components/pages/Generate";
import ErrorComponent500 from "./components/errors/ErrorComponent500";
import Match from "./components/pages/Match";
import StoreDetail from "./components/pages/StoreDetail";
import Order from "./components/pages/Order";

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
    errorElement: <ErrorComponent404 />,
    children: [
      {
        index: true,
        path: "/",
        errorElement: <ErrorComponent500 />,
        element: <Home />,
      },
      {
        path: "generate",
        errorElement: <ErrorComponent500 />,
        element: <Generate />,
      },
      {
        path: "match",
        errorElement: <ErrorComponent500 />,
        element: <Match />,
      },
      // {
      //   path: "shop",
      //   errorElement: <ErrorComponent500 />,
      //   element: <Dummy />,
      // },
      {
        path: "store-detail/:shopId",
        errorElement: <ErrorComponent500 />,
        element: <StoreDetail />,
      },
      {
        path: "my-page",
        errorElement: <ErrorComponent500 />,
        element: <Dummy />,
      },
      {
        path: "order/:id",
        errorElement: <ErrorComponent500 />,
        element: <Order />,
      },
    ],
  },
  {
    path: "/business",
    element: <BusinessLayout />,
  },
]);

export default router;
