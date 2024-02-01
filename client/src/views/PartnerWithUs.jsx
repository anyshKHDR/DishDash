import React from "react";
import Button from "../components/Button";

const PartnerWithUs = ()=>{

    
    return(
        <div className="PWU">
            <div className="bButtons">
                <div className="bDiv">
                <Button 
                    text={"Register your restaurant"}
                    className={"btn btn-light"}
                    // style={{color:"red", border:"green", padding:"20px"}}
                />
                <Button 
                    text={"Login to your existing restaurant"}
                    className={"btn btn-light"}
                    // style={{color:"red", border:"green", padding:"20px"}}
                />
                </div>
            </div>

            <div className="RDRow">
                <div className="documentList">
                    <h3>Required documents to register</h3>
                    <div className="r1">
                        <div><p>FSSAI license copy</p></div>
                        <div><p>Regular GSTIN (if applicable)</p></div>
                        <div><p>PAN card copy</p></div>
                    </div>
                    <div className="r1">
                        <div><p>Bank account details</p></div>
                        <div><p>Your restaurant menu</p></div>
                        <div><p>Dish images for top 5 items</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerWithUs;