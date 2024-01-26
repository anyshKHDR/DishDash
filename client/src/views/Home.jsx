import React from "react";
import Suggestion from "../components/Suggestion";
import Restaurant from "../components/Restaurant"

const Home = ()=>{
    return(
        <>
            <Suggestion 
                title = {"What's your mood?!"}
            />
            <Suggestion 
                title = {"Top restaurant chains near you"} 
            />
            <Restaurant />
        </>
        
    )
}

export default Home;