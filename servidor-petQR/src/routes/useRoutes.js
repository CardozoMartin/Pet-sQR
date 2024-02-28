import express from 'express';

import {
  deleteUser,
  getUsers,
  postUser,
  putUser,
} from '../controllers/userController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { postUserSchema } from '../helpers/validationSchemas/userSchemaValidation.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', (res, req, next) => validateBody(req, res, next, postUserSchema), postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;
