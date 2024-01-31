import React from "react";
import { useDispatch } from "react-redux";
import { showForm } from "../app/features/dishFormSlice";

const MenuManage = ()=>{

    const dispatch = useDispatch();

    return(
        <div className="editMenu">
            <button type="button" className="btn btn-primary btn-lg" >Edit Dishes and Category</button>
            <button type="button" className="btn btn-success btn-lg" onClick={()=>dispatch(showForm())} >Add Dishes and Category</button>
        </div>
    )
}

export default MenuManage;