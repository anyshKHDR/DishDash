import mongoose from "mongoose";

const rSignUpFormModel = new mongoose.Schema({
    fName:String,
    lName:String,
    uName:String,
    phone:Number,
    email:String,
    pass:String,
    cPass:String,
    userType:String
})

const rSignUpForm = mongoose.model("rSignUpForm", rSignUpFormModel);

export default rSignUpForm;