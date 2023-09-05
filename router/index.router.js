import express from 'express';
import userRouter from './user.router.js';
import cityRouter from './city.router.js';
import itinerariesRouter from './itineraries.router.js';
const router = express.Router();





router.use('/auth', userRouter);

router.use('/cities', cityRouter);
router.use('/itineraries',itinerariesRouter)

export default router;