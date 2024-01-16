import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentID: String,
    OrderID: String,
    amaount: Number,
    paymentMethod: String,
    paymentStatus: String
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

