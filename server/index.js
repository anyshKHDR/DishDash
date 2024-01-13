import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT,CONNECTION_URL } from "./config.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

