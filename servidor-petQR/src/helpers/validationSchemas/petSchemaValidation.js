import Joi from 'joi';

export const postPetSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-Z0-9-_ ]+$/),
  tipo: Joi.string()
    .required()
    .valid('Perro', 'Gato', 'Conejo', 'Hamster', 'Ave'),
  raza: Joi.string().optional().min(2).max(50),
});
