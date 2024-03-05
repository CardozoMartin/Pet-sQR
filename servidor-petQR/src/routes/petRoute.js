import express from 'express';

import { getPets, postPet } from '../controllers/petController.js';

const router = express.Router();

router.get('/', getPets);
router.post('/', postPet);

export default router;
