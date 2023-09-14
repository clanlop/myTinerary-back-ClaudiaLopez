import create from '../controllers/city.controller/create.js'
import read from '../controllers/city.controller/read.js'
import readById from '../controllers/city.controller/readById.js'
import update from '../controllers/city.controller/update.js'
import destroy from '../controllers/city.controller/destroy.js'
import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.Middleware.js'
import passport from '../middlewares/passport.js';

const router = express.Router();



 
router.post('/',passport.authenticate('jwt', { session: false }),isAdmin,create); 
router.get('/',read);
router.get('/:id',readById);
router.put('/:id',passport.authenticate('jwt', { session: false }),isAdmin,update);
router.delete('/:id',passport.authenticate('jwt', { session: false }),
isAdmin,
destroy);
export default router;