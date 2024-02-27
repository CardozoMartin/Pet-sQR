import UserModel from '../models/userSchema.js';

export const getUsers = async (_, res) => {
  try {
    const data = await UserModel.find();

    res.json(data);
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error',
    });
  }
};

export const postUser = async (req, res) => {
  const { body } = req;

  const newUser = new UserModel({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    direccion: body.direccion,
    numberPhone: body.numberPhone,
    password: body.password,
  });

  try {
    await newUser.save();
    res.status(201).json({
      message: 'Registro exitoso',
    });
  } catch (e) {
    if (e.message.includes('duplicate')) {
      res.status(400).json({
        message: 'El email ya se encuentra registrado',
      });
      return;
    }
  }
  res.status(500).json({
    message: 'ocurrio un error al registrarse',
  });
};
