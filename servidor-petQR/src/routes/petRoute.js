import express from 'express';

import { getPets, postPet } from '../controllers/petController.js';
import { petValidateBody } from '../middlewares/petValidateBody.js';
import { postPetSchema } from '../helpers/validationSchemas/petSchemaValidation.js';

const router = express.Router();

router.get('/', getPets);
router.post(
  '/',
  (res, req, next) => petValidateBody(req, res, next, postPetSchema),
  postPet,
);
router

export default router;
