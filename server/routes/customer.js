import express from "express";

import { getDishID, getDishes } from "../controllers/customer.js";

const router = express.Router();

router.get('/', getDishes);
router.get("/:id", getDishID);

export default router;