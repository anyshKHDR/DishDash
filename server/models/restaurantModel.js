import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    name: String,
    discription: String,
    price: Number,
    dietaryInfo: String
})

const Dish = mongoose.model("Dish", dishSchema);

const restaurantSchema = new mongoose.Schema({
    email: String,
    password: String,
    phoneNumber: Number,
    restaruantName: String,
    address:{
        fullName: String,
        line1: String,
        line2: String,
        city_town: String,
        state: String,
        Pin_code: Number
    },
    dishes: [Dish]
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;