import express from "express";
import {authorize, login } from "../controller/authController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router=express.Router();

router.post('/loginAuth',login);
router.get('/authorize',verifyToken, authorize)

export default router;