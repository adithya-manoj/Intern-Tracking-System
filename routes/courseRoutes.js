import express from "express";
import { course, deleteCourse, viewCourse } from "../controller/courseController.js";
import { upload } from "../middlewares/Uploads.js";


const router = express.Router();

router.post('/addCourse',upload.fields([{name:'syllabus',maxcount:1},{name:'courseimage',maxcount:1}]), course)
router.get('/viewCourse',viewCourse)
router.post('/deleteCourse',deleteCourse)

export default router;