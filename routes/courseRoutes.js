import express from "express";
import { course, viewCourse } from "../controller/courseController.js";
import { upload } from "../middlewares/Uploads.js";


const router = express.Router();

router.post('/addCourse',upload.fields([{name:'syllabus',maxcount:1},{name:'courseimage',maxcount:1}]), course)
router.get('/viewCourse',viewCourse)

export default router;