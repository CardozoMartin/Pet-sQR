import express from 'express';
import { getPets } from '../controllers/petControllers.js';

const router = express.Router();

router.get('/', getPets);
router.post('/',postPet);
