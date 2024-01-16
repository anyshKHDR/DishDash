import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    phoneNumbe: Number,
    userName: String,
    address:{
        fullName: String,
        line1: String,
        line2: String,
        city_town: String,
        state: String,
        Pin_code: Number
    }
});

const User = mongoose.model("User", userSchema);

export default User;