import React from "react";
import Items from "./Items";
import {Link} from "react-router-dom";

const Restaurant= ()=>{
    
    return(
        <div className="restaurant">
            <div className="container">
                <Link to="/menu">
                    <Items />
                </Link>
            </div>
        </div>
    )
}

export default Restaurant;