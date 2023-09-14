import express from 'express';
import userRouter from './user.router.js';
import cityRouter from './city.router.js';
import itinerariesRouter from './itineraries.router.js';
import authRouter from './auth.router.js'
const router = express.Router();





router.use('/user', userRouter);

router.use('/cities', cityRouter);
router.use('/itineraries',itinerariesRouter);
router.use('/auth',authRouter)

export default router;