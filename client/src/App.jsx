import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Menu from "./views/Menu";

const App = ()=>{
    return(
        <>
            <Header /> 

            {/* <Home />     */}
            <Menu />

            <Footer />
        </>
    )
}

export default App;