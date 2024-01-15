import express from "express";
import {getRestaurant} from "../controllers/restaurant.js"

const router = express.Router();

router.get("/", getRestaurant)

export default router;