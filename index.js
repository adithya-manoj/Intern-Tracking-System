import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import trainerRoutes from './routes/trainerRoutes.js';
import internRoutes from './routes/internRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect('mongodb://localhost:27017/ITR')
.then(()=>console.log("Database Connection Established!!"));



const app = express();
const PORT = '4000';
const db = mongoose.connection

app.use(express.json())
app.use(cors())

app.use('/trainers', trainerRoutes);
app.use('/interns', internRoutes);
app.use('/course',courseRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));





app.listen(PORT,()=>{console.log('Started Devolpment Server on PORT 4000!!' );})