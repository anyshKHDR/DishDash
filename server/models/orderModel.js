import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
    customerID: String,
    orders :[{
        restaurantID: String,
        dishID: [String],
    }],
    totalAmaount: Number,
    orderDateandTime: String,
    status: String
});

const Order = mongoose.model("Order", orderShema);

export default Order;