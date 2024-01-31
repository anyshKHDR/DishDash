import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Menu from "./views/Menu";
import RestaurantOwner from "./views/RestaurantOwner";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = ()=>{
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/menu",
            element:<Menu />
        },
        {
            path:"/business",
            element:<RestaurantOwner />
        }
    ])
    return(
        <>
            <Header /> 

                <RouterProvider router={router} /> 
            
            <Footer />
        </>
    )
}

export default App;