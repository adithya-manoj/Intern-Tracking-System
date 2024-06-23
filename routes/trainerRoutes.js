import express from 'express';
import {registerTrainer, ViewTrainer } from '../controller/trainerController.js';

const router = express.Router();

router.post('/register',registerTrainer );
router.get('/view',ViewTrainer);

export default router;
