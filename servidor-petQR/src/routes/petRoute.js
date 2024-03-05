import express from 'express';

import {
  deletePet,
  getPets,
  postPet,
  putPet,
} from '../controllers/petController.js';
import { petValidateBody } from '../middlewares/petValidateBody.js';
import { postPetSchema } from '../helpers/validationSchemas/petSchemaValidation.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.get('/', getPets);
router.post(
  '/',
  (res, req, next) => petValidateBody(req, res, next, postPetSchema),
  postPet,
);
router.put('/:id', isAuthenticated, putPet);
router.delete('/:id', isAuthenticated, deletePet);

export default router;
