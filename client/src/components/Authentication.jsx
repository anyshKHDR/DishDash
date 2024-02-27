import validator from "validator";
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { formSubmitAsync } from "../app/features/signUpFormSlice"

const Authenticate= ()=>{

    const signIn = useSelector((state) => state.signIn.value);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sUFormData, setSUFormData] = useState({
        fName:"",lName:"",uName:"",phone:"",email:"",pass:"",cPass:"",userType:""
    });
    const [sIFormData,setSIFormData] = useState({email:"",pass:""});
    const [passMismatch, setPassMismatch] = useState(false)
    const [showPass, setShowPass] = useState(false);
    const [showCPass, setShowCPass] = useState(false);
    const [stronPass, setStrongPass] = useState(null)

    const handleChange =(event)=>{
        const {name, value} = event.target; 
        if(!signIn){
            setSUFormData({
                ...sUFormData,
                [name]: value,
            });
        }else(
            setSIFormData({
                ...sIFormData,
                [name]: value
            })
        )
    }

    const handleChangePass = (event)=>{
        const value = event.target.value;
        setSUFormData({
            ...sUFormData,
            pass:value
        });

        if (validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })){
            setStrongPass(true);
        } else {
            setStrongPass(false);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(sUFormData.pass===sUFormData.cPass && stronPass){
            dispatch(formSubmitAsync(sUFormData)) 
            navigate("/business")
        }else{
            setPassMismatch(true);
            setSUFormData({
                ...sUFormData,
                cPass:""
            });
            setTimeout(()=>{
                setPassMismatch(false);
            },4000);
        }
    };
    
    return(
        <div className="sSCntnr bg-secondary">
            <div className="lDtls flex gap-5">
                <div className="p-2 m-3 g-col-6 ">
                    {signIn?
                        <h2>Sign In</h2>:<h2>Sign Up</h2>
                    }
                </div>
                <form onSubmit={handleSubmit} action="">
                    {!signIn &&
                        <>
                            <div className="p-2 m-3 g-col-6 ">
                                <input type="text" id="fName" name="fName" placeholder="First Name" onChange={handleChange} value={sUFormData.fName} required/>
                            </div>
                            <div className="p-2 m-3 g-col-6 ">
                                <input type="text" id="lName" name="lName" placeholder="Last Name" onChange={handleChange} value={sUFormData.lName} required/>
                            </div>
                            <div className="p-2 m-3 g-col-6 ">
                                <input type="text" id="uName" name="uName" placeholder="User Name" onChange={handleChange} value={sUFormData.uName} required/>
                            </div>
                            <div className="p-2 m-3 g-col-6 ">
                                <input type="tel" id="phone" name="phone" placeholder="Phone Number" minLength="10" maxLength="10" pattern="[0-9]{10}" onChange={handleChange} value={sUFormData.phone} required/>
                            </div>
                        </>
                    }

                    <div className="p-2 m-3 g-col-6 ">
                        <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} value={sUFormData.email} required/>
                    </div>
                    <div className="p-2 m-3 g-col-6 ">
                        <input type={!showPass?"password":"text"} id="pass" name="pass" placeholder="Password" minLength="8" maxLength="30" onClick={()=>!stronPass &&setStrongPass(false)} onChange={handleChangePass} value={sUFormData.pass} required />
                        {showPass?
                            <span onClick={()=>setShowPass(!showPass)}>
                                <svg id="eyeFillIconCN" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                            </span>
                        :
                            <span onClick={()=>setShowPass(!showPass)}>
                                <svg id="eyeFillIconC" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                </svg>
                            </span>
                        }
                        {/* <p className="pwdSText" style={!stronPass?{color:"red"}:{color:"green"}}>{stronPass==null?"":!stronPass? "Password is not strong enough.It must be at least 8 characters long, include uppercase and lowercase letters, contain numbers, and symbols": "Password is strong"} </p>  */}
                        {!stronPass?
                            <>
                                <p className="pwdSText" style={{color:"red", marginBottom:"0"}}>Password is not strong enough</p> 
                                <p style={{margin:"0"}}>It must be at least 8 characters long, includes uppercase and</p>
                                <p> lowercase letters, contain numbers, and symbols</p>
                            </>
                        :
                            <>
                                <p className="pwdSText" style={{color:"green"}}>Password is strong</p>
                            </>
                        }
                    </div>

                    {!signIn &&
                        <div className="p-2 m-3 g-col-6" >
                            <input type={!showCPass?"password":"text"} id="cPass" name="cPass" placeholder="Confirm Password" onChange={handleChange} min="8" max="30"  value={sUFormData.cPass} required/>
                                {showCPass?
                                    <span onClick={()=>setShowCPass(!showCPass)}>
                                        <svg id="eyeFillIconCPN" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                        </svg>
                                    </span>
                                :
                                    <span onClick={()=>setShowCPass(!showCPass)}>
                                        <svg id="eyeFillIconCP" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                        </svg>
                                    </span>
                                }
                        </div>
                    }

                    <div className="p-2 m-3 g-col-6 lBtnDiv">
                        <Link to="/business">
                            <button type="button" className="btn btn-warning cBtn">Cancel</button>
                        </Link>
                        <button type="submit" className="btn btn-success sBtn">
                            {signIn?"Sign In":"Sign UP"}
                        </button>
                    </div>
                    {passMismatch&&<p style={{color:"red", marginLeft:"23px", marginTop:"-15px"}}>Passwords do not match! try again</p>}
                </form>
            </div>
        </div>
    )
}

export default Authenticate;