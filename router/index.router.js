import express from 'express';
import userRouter from './user.router.js';
import cityRouter from './city.router.js'
const router = express.Router();





router.use('/auth', userRouter);

router.use('/cities', cityRouter);

export default router;