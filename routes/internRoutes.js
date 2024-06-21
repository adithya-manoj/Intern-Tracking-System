import express from 'express';
import { registerIntern, viewIntern } from '../controller/internController.js';


const router = express.Router();

router.post('/register',registerIntern)
router.get('/viewIntern',viewIntern)

export default router;