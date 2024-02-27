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
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/UAuth">
                        <button className="btn btn-light" 
                        onClick={()=>dispatch(showSignIn())}>
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
            <DocumentsRequired />
        </div>
    )
}

export default PartnerWithUs;