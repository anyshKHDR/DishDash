import React from "react";

const DocumentsRequired = ()=>{
    return(
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
    )
}

export default DocumentsRequired;