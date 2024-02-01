import React from "react";

const Button = ({text,style,className,onClick})=>{
    return(
        <button style={style} className={className} onClick={onClick}>{text}</button> 
    )
}

export default Button;