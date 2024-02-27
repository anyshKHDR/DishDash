import express from "express";
import {postRSignUp} from "../controllers/restaurant.js"

const router = express.Router();

router.post("/owner/signup", postRSignUp)

export default router;