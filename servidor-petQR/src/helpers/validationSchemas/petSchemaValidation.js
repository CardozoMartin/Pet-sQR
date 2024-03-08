import Joi from 'joi';

export const postPetSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-Z0-9-_ ]+$/),
  tipo: Joi.string()
    .required()
    .valid('Perro', 'Gato', 'Conejo', 'Hamster', 'Caballo'),
  raza: Joi.string().optional().min(2).max(50),
  image: Joi.object({
    data: Joi.binary().required(), // Este campo representará los datos binarios de la imagen
    contentType: Joi.string().valid('image/jpeg', 'image/png', 'image/gif').required() // Tipo MIME válido para la imagen
  }).required()
});
