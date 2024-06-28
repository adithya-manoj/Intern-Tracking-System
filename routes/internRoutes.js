import express from 'express';
import { assignTask, countInterns, deleteIntern, registerIntern, statusIntern, updateInterns, viewAssignedIntern, viewIntern, ViewTask } from '../controller/internController.js';


const router = express.Router();

router.post('/register',registerIntern)
router.get('/viewIntern',viewIntern)
router.post('/deleteIntern',deleteIntern)
router.get('/countInterns',countInterns)
router.patch('/statusIntern',statusIntern)
router.put('/updateInterns',updateInterns)
router.get('/viewAssignedIntern/:id',viewAssignedIntern)
router.post('/assignTask',assignTask)
router.get('/ViewTask',ViewTask)


export default router;