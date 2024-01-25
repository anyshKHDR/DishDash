import React from "react";
import Header from "./Header";
import DishSuggestion from "./Suggestion";
import Footer from "./Footer";
import Dishes from "./Dishes";

const App = ()=>{
    return(
        <>
            <Header /> 
            <DishSuggestion 
                title = {"What's your mood?!"}
            />
            <DishSuggestion 
                title = {"Top restaurant chains near you"} 
            />
            <Dishes />
            <Footer />
        </>
    )
}

export default App;