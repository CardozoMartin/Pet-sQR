import UserModel from '../models/userSchema.js';
import bcrypt from 'bcryptjs';

export const getUsers = async (_, res) => {
  try {
    const data = await UserModel.find({});
    const filterData = data
      .filter((user) => user._dic.isActive === true)
      .map((user) => ({
        ...user._doc,
        password: undefined,
        isActive: undefined,
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

export const putUser = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  if (body.password) {
    const hashPassword = bcrypt.hashSync(body.password, 10);
    body.password = hashPassword;
  }

  try {
    const action = await UserModel.updateOne({ _id: id }, body);
    if (action.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No se encontro un usuario con ese id',
      });
      return;
    }
    res.json({
      data: null,
      message: 'Usuario editado exitosamente',
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

export const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const action = await UserModel.updateOne({ _id: id }, { isActive: false });
    if (action.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No se encontro un usuario con ese id',
      });
      return;
    }
    res.json({
      data: null,
      message: 'Usuario eliminado exitosamente',
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
