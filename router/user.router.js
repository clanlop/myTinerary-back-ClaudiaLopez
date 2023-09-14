import create from '../controllers/user.controller/create.js';
import read from '../controllers/user.controller/read.js';
import update from '../controllers/user.controller/update.js';
import destroy from '../controllers/user.controller/destroy.js';
import readById from '../controllers/user.controller/readById.js';
import express from 'express';
import { validator } from '../middlewares/validator.js' 
import { createUserSchema } from '../schema/user.schema.js';
const userRouter = express.Router();



userRouter.get('/' ,read);
userRouter.post('/',validator(createUserSchema),create);
userRouter.put('/:id',update);
userRouter.delete('/:id',destroy)
userRouter.get('/:id',readById);



export default userRouter;