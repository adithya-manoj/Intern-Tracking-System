import express from 'express';
import { countInterns, deleteIntern, registerIntern, viewIntern } from '../controller/internController.js';


const router = express.Router();

router.post('/register',registerIntern)
router.get('/viewIntern',viewIntern)
router.post('/deleteIntern',deleteIntern)
router.get('/countInterns',countInterns)

export default router;