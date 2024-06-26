import express from 'express';
import { countInterns, deleteIntern, registerIntern, statusIntern, updateInterns, viewIntern } from '../controller/internController.js';


const router = express.Router();

router.post('/register',registerIntern)
router.get('/viewIntern',viewIntern)
router.post('/deleteIntern',deleteIntern)
router.get('/countInterns',countInterns)
router.patch('/statusIntern',statusIntern)
router.put('/updateInterns',updateInterns)

export default router;