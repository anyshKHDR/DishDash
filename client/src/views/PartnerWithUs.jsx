import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSignIn, showSignUP } from "../app/features/signInSlice";
import DocumentsRequired from "../components/DocumentsRequiered";

const PartnerWithUs = ()=>{

    const dispatch = useDispatch();

    return(
        <div className="PWU">
            <div className="bButtons">
                <div className="bDiv">
                    <Link to="/UAuth">
                        <button className="btn btn-light" 
                        onClick={()=>dispatch(showSignUP())}>
                            SignUp and register your restaurant
                        </button>
                    </Link>
                    <Link to="/UAuth">
                        <button className="btn btn-light" 
                        onClick={()=>dispatch(showSignIn())}>
                            Login to your existing restaurant
                        </button>
                    </Link>
                </div>
            </div>
            <DocumentsRequired />
        </div>
    )
}

export default PartnerWithUs;