import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userID: String,
    restaurantID: String,
    dishId: String,
    rating: Number,
    comment: String,
    dateAndTime: String
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;