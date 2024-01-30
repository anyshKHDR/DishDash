import React from "react";

const RestaurantHeader = ()=>{
    return(
        <div className="rHead">

            <div className="avatar">
                <img src="http://www.absoluteanime.com/avatar_the_last_airbender/aang[2].jpg" alt="" />
            </div>
            
            <div className="rDetail">
                <div className="name">
                    <h3>Dude's Restaurant</h3>
                </div>
                <div className="address">
                    <h5>Velancherry, Chennai 600028</h5>
                </div>
            </div>

            <div className="edit">
                <img src="https://static.vecteezy.com/system/resources/previews/000/442/110/original/vector-settings-icon.jpg" alt="edit" />
            </div>
            
        </div>
    )
}

export default RestaurantHeader;