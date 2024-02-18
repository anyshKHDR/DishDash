import "./dist/styles.css";
import React, { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { store } from "./app/store.js";
// import App from "./App.jsx";
import Home from "./views/Home.jsx";
import Menu from "./views/Menu.jsx";
import RestaurantOwner from "./views/RestaurantOwner.jsx";
import Layout from "./components/Layout.jsx";
import PartnerWithUs from "./views/PartnerWithUs.jsx";
import UserAuthentication from "./views/UAuth.jsx";
import UAuth from "./views/UAuth.jsx";

const router = createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/menu",
                element:<Menu />
            },
            {
                path:"/owner",
                element:<RestaurantOwner />
            },
            {
                path:"/business",
                element:<PartnerWithUs />
            },
            {
                path:"/uAuth",
                element:<UAuth />
            }
        ]
    }
    
])

const root = createRoot(document.getElementById("root"));
root.render(
        <StrictMode>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
        </StrictMode>
);