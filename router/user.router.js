import create from '../controllers/user.controller/create.js';
import read from '../controllers/user.controller/read.js';
import update from '../controllers/user.controller/update.js';
import destroy from '../controllers/user.controller/destroy.js';
import express from 'express';
const userRouter = express.Router();



userRouter.get('/' ,read);
userRouter.post('/',create);
userRouter.put('/:id',update);
userRouter.delete('/:id',destroy)




export default userRouter;