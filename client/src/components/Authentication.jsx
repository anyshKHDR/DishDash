import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Authenticate= ()=>{

    const signIn = useSelector((state) => state.signIn.value);

    return(
        <div className="sSCntnr bg-secondary">
                <div className="lDtls flex gap-5">
                        <div className="p-2 m-3 g-col-6 ">
                            {signIn?
                                <h2>Sign In</h2>:<h2>Sign Up</h2>
                            }
                        </div>
                        <form action="" >
                            {!signIn &&
                                <>
                                    <div className="p-2 m-3 g-col-6 ">
                                        <input type="text" id="fName" name="fName" placeholder="First Name"/>
                                    </div>
                                    <div className="p-2 m-3 g-col-6 ">
                                        <input type="text" id="lName" name="lName" placeholder="Last Name"/>
                                    </div>
                                    <div className="p-2 m-3 g-col-6 ">
                                        <input type="text" id="uName" name="uName" placeholder="User Name"/>
                                    </div>
                                    <div className="p-2 m-3 g-col-6 ">
                                        <input type="tel" id="phone" name="phone" placeholder="Phone Number"/>
                                    </div>
                                </>
                            }

                            <div className="p-2 m-3 g-col-6 ">
                                <input type="email" id="email" name="email" placeholder="Email" minLength="10" maxLength="10"/>
                            </div>
                            <div className="p-2 m-3 g-col-6 ">
                                <input type="password" id="pass" name="pass" placeholder="Password" minLength="8" maxLength="30" />
                            </div>

                            {!signIn &&
                                <div className="p-2 m-3 g-col-6 ">
                                    <input type="password" id="cPass" name="cPass" placeholder="Confirm Password"/>
                                </div>
                            }

                            <div className="p-2 m-3 g-col-6 lBtnDiv">
                                <Link to="/business">
                                    <button type="button" className="btn btn-warning">Cancel</button>
                                </Link>
                                <button type="button" className="btn btn-success">
                                    {signIn?"Sign In":"Sign UP"}
                                </button>
                            </div>

                            <input type="hidden" id="userType" name="userType" value="restaurant"/>
                        </form>
                </div>
                
        </div>
    )
}

export default Authenticate;