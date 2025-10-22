import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { AllRoute } from "./routes/AllRoute";


createRoot(document.getElementById("root")).render(
    <RouterProvider router={AllRoute}
    />
);