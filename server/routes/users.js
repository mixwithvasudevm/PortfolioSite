import express from "express";
import { getUser,redirect } from "../controllers/User.js";

const router = express.Router();

router.get("/",getUser);
router.get("/secert", redirect);

export default router;
