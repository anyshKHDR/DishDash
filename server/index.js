import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import customerRoutes from "./routes/customer.js"
import restaurantRoutes from "./routes/restaurant.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", customerRoutes);
app.use("/restaurant", restaurantRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>app.listen(process.env.PORT, ()=>console.log(`Server running on port ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));

