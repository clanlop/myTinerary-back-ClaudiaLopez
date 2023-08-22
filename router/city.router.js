import create from '../controllers/city.controller/create.js'
import read from '../controllers/city.controller/read.js'
import readById from '../controllers/city.controller/readById.js'
import update from '../controllers/city.controller/update.js'
import destroy from '../controllers/city.controller/destroy.js'
import express from 'express';
const router = express.Router();


 
router.post('/',create); 
router.get('/',read);
router.get('/:id',readById);
router.put('/:id',update);
router.delete('/:id',destroy);
export default router;