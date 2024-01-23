import React from "react";
import Header from "./Header";
import DishSuggestion from "./Suggestion";

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
        </>
    )
}

export default App;