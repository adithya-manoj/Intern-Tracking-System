import express from 'express';
import { assignTask, countInterns, deleteIntern, registerIntern, statusIntern, updateAnswer, updateInterns, viewAssignedIntern, viewIntern, ViewTask, ViewTaskbyQuestion, ViewTaskbyUser } from '../controller/internController.js';


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
router.get('/ViewTaskbyQuestion/:question', ViewTaskbyQuestion);
router.get('/ViewTaskbyUser/:user',ViewTaskbyUser) 
router.post('/updateAnswer',updateAnswer)
// router.put('/updateStatus',updateAnswer)


export default router;