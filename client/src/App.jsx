import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Menu from "./views/Menu";
import RestaurantOwner from "./views/RestaurantOwner";

const App = ()=>{
    return(
        <>
            <Header /> 

            {/* <Home />     */}
            {/* <Menu /> */}
            <RestaurantOwner />

            <Footer />
        </>
    )
}

export default App;