
import create from '../controllers/itineraries.controller/create.js';
import readById from '../controllers/itineraries.controller/readById.js';
import update from '../controllers/itineraries.controller/update.js';
import destroy from '../controllers/itineraries.controller/destroy.js';
import read from '../controllers/itineraries.controller/read.js';
import express from 'express';
import { validator } from '../middlewares/validator.js';
import { createItinerarySchema } from '../schema/itinerary.schema.js';
import passport from '../middlewares/passport.js';
const router = express.Router();



 
router.post('/',validator(createItinerarySchema),passport.authenticate('jwt', { session: false }),create); 
router.get('/',read);
router.get('/:id',readById);
router.put('/:id',passport.authenticate('jwt', { session: false }),update);
router.delete('/:id',passport.authenticate('jwt', { session: false }),destroy);
export default router;