import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import customerRoutes from "./routes/customer.js"
import restaurantRoutes from "./routes/restaurant.js"

const app = express();

app.use("/user", customerRoutes);

app.use('/restaurant', restaurantRoutes)

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>app.listen(process.env.PORT, ()=>console.log(`Server running on port ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));

