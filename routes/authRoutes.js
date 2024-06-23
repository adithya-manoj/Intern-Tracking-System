import express from "express";
import { authentication } from "../controller/authController.js";

const router=express.Router();

router.post('/authentication',authentication);

export default router;