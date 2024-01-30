import React from "react";
import DishesAndCategory from "./DishesAndCategory";
import NewDishe from "./NewDish";

const ManageMenu = ()=>{
    return(
        <div className="manage">
            <div className="editMenu">
                <button type="button" class="btn btn-primary btn-lg">Edit Dishes and Category</button>
                <button type="button" class="btn btn-success btn-lg">Add Dishes and Category</button>
            </div>


            {/* <DishesAndCategory /> */}
            <NewDishe />
        </div>

    )
}

export default ManageMenu;