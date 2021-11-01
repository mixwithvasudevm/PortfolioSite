import express from "express";
import { getUser,redirect } from "../controllers/User.js";

const router = express.Router();

router.post("/",getUser);

export default router;
