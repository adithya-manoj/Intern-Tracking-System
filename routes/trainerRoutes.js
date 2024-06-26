import express from 'express';
import {deleteTrainer, registerTrainer, statusTrainer, ViewTrainer } from '../controller/trainerController.js';


const router = express.Router();

router.post('/register',registerTrainer );
router.get('/view',ViewTrainer);
router.post('/delete',deleteTrainer);
router.patch('/status',statusTrainer);

export default router;
