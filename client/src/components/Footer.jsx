import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
    
    const year = new Date().getFullYear();
    return(
        <footer>
            <div className="copyright">
                <div className="fLogo">
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/linux-tux-1-logo-png-transparent.png" alt="" />
                </div>
                <p>© {year} DineDash Pvt. Ltd</p>
            </div>
            <div className="about">
                <div>
                    <h6>Who We Are</h6>
                </div>
                <div>
                    <h6>Contact Us</h6>
                </div>
                <div>
                    <Link to="/business" style={{color:"black", textDecoration:"none"}}><h6 >Partner With Us</h6></Link> 
                </div>
            </div>
        </footer>
    )

}

export default Footer;