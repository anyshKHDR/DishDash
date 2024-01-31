import React from "react";
import { useSelector,useDispatch } from "react-redux";
import DishesAndCategory from "./DishesAndCategory";
import NewDishe from "./NewDish";
import MenuManage from "./MenuMange";

const ManageMenu = ()=>{

    const formStatus = useSelector((state)=>state.dishForm.value);

    return(
        <div className="manage">

            {formStatus?
            <NewDishe />
            :
            <>
                <MenuManage />
                <DishesAndCategory />
            </>
            }
        </div>

    )
}

export default ManageMenu;