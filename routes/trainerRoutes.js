import express from 'express';
import { LoginTrainer, registerTrainer, ViewTrainer } from '../controller/trainerController.js';

const router = express.Router();

router.post('/register',registerTrainer );
router.post('/login', LoginTrainer);
router.get('/view',ViewTrainer)

export default router;
