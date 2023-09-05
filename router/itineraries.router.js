
import create from '../controllers/itineraries.controller/create.js';
import readById from '../controllers/itineraries.controller/readById.js';
import update from '../controllers/itineraries.controller/update.js';
import destroy from '../controllers/itineraries.controller/destroy.js';
import read from '../controllers/itineraries.controller/read.js';
import express from 'express';
const router = express.Router();



 
router.post('/',create); 
router.get('/',read);
router.get('/:id',readById);
router.put('/:id',update);
router.delete('/:id',destroy);
export default router;