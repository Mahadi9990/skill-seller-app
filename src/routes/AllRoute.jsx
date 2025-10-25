import React from "react";
import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Swiper from "../components/Swiper";
import Profile from "../pages/Profile";
import Loading from "../pages/Loading";
import SingleSkills from "../pages/SingleSkills";
import SkillsDetails from "../pages/SkillsDetails";
import Error from "../pages/Error";
import AllSkillsOutlet from "../components/AllSkillsOutlet";
import No from "../components/no";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/Auth";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("/8data.json"),
        HydrateFallback: Loading,
        Component: Swiper,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "allSkills",
        Component: AllSkillsOutlet,
        children: [
          {
            index: true,
            loader: () => fetch("/8data.json"),
            HydrateFallback: Loading,
            Component: No,
          },
          {
            path: "catagory/:id",
            loader: () => fetch("/8data.json"),
            HydrateFallback: Loading,
            Component: SingleSkills,
          },
        ],
      },
    ],
  },
  {
    path: "skills/:id",
    Component: SkillsDetails,
    loader: () => fetch("/8data.json"),
    HydrateFallback: Loading,
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
