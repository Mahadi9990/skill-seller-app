
import React from "react";
import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Swiper from "../components/Swiper";
import Profile from "../pages/Profile";
import Loading from "../pages/Loading";
import AllSkills from "../components/AllSkills";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleSkills from "../pages/SingleSkills";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: (
        <Main />
    ),
    children:[
      {
        path:"/",
        loader: () => fetch("/8data.json"),
        HydrateFallback: Loading,
        Component:Swiper
      },{
        path:'profile',
        Component:Profile
      },
      {
        path: 'allSkills',
        Component:AllSkills,
        loader: () => fetch("/8data.json"),
        HydrateFallback: Loading,
      },
      {
        path: 'skills/:id',
        Component:SingleSkills,
        loader: () => fetch("/8data.json"),
        HydrateFallback: Loading,
      }
    ]
  },{
    path:'/login',
    Component:Login
  },{
    path:'/register',
    Component:Register
  }
]);
