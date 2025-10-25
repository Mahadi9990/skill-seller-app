import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { AllRoute } from "./routes/AllRoute";
import AuthProvider from "./provider/AuthProvider";


createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterProvider router={AllRoute} />
    </AuthProvider>
    
);