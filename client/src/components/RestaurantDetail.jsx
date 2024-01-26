import React from "react";

const RestaurantDetail = ()=>{
    return(
        <div className="restaurantDetails">
            <div className="nameAndRating">
                <div className="name">
                    <h4>Dude's cafe</h4>
                </div>
                <div className="rating">
                    <h4>5</h4>
                </div>
            </div>

            <div className="location">
                <h5>Chennai</h5>
            </div>

            <div className="activeTime">
                <h5>10AM - 12PM</h5>
            </div>

            <div className="cuisines">
                <h5>Dessert, South Indian, North Idian, Italian, Chinese, Thai,Dessert, South Indian, North Idian, Italian, Chinese, Thai,</h5>
            </div>

            <div className="deliveryCharge">
                <h5>Delivery Charge will be applied</h5>
            </div>
        </div>
    )
}

export default RestaurantDetail;