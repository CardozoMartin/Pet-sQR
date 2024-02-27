import UserModel from '../models/userSchema.js';
import bcrypt from 'bcryptjs';

export const getUsers = async (_, res) => {
  try {
    const data = await UserModel.find({});
    const filterData = data.map((user) => ({
      ...user._doc,
      password: undefined,
    }));
    res.json({ data: filterData, message: 'Usuarios encontrados' });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error',
    });
  }
};

export const postUser = async (req, res) => {
  const { body } = req;
  const hashPassword = bcrypt.hashSync(body.password, 10);

  const newUser = new UserModel({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    direccion: body.direccion,
    numberphone: body.numberphone,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({
      data: null,
      message: 'Registro exitoso',
    });
  } catch (e) {
    if (e.message.includes('duplicate')) {
      res.status(400).json({
        data: null,
        message: 'El email ya se encuentra registrado',
      });
      return;
    }
  }
};
