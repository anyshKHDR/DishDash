import express from "express";

import { getDishes } from "../controllers/customer.js";

const router = express.Router();

router.get('/', getDishes);

export default router;