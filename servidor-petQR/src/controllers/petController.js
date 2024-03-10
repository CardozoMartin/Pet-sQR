import PetModel from '../models/petSchema.js';
import multer from 'multer';
import { uploadFile } from '../helpers/upload.js';
export const getPets = async (req, res) => {
  try {
    const data = await PetModel.find({});

    const petData = data
      .filter((pet) => pet._doc.isActive === true)
      .map((pet) => ({
        id: pet._id,
        name: pet.name,
        tipo: pet.tipo,
        raza: pet.raza,
        image: pet.image,
        userID: pet.userID,
      }));
    res.json({ data: petData, message: 'Mascotas encontradas' });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error',
    });
  }
};

export const postPet = async (req, res) => {
  const body = req.body;
  const imagen = req.files.image;

  console.log(imagen);

  if (imagen && imagen.length > 0) {
    const { downloadURL } = await uploadFile(imagen[0]);

    const newPet = await new PetModel({
      name: body.name,
      tipo: body.tipo,
      raza: body.raza,
      direccion: body.direccion,
      numberphone: body.numberphone,
      content: body.content,
      image: downloadURL,
      userID: body.userID,
      isActive: true,
    }).save();

    return res.status(200).json(newPet);
  }
  return res.status(400).json({ message: 'faltaron datos' });
};

export const putPet = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  console.log(body);
  console.log(id)
  try {
    const actionPet = await PetModel.updateOne({ _id: id }, body);
    if (actionPet.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No se encontro una mascota ese ID',
      });
      return;
    }
    res.json({
      data: null,
      message: 'Mascota editada con exito',
    });
  } catch (e) {
    res.status(400).json({
      data: null,
      message: 'ocurrio un error al editar',
    });
    // eslint-disable-next-line no-useless-return
    return;
  }
};

export const deletePet = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const actionPet = await PetModel.updateOne(
      { _id: id, isActive: true },
      { isActive: false },
    );
    if (actionPet.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No se encontro una mascota con ese Id',
      });
      return;
    }
    res.json({
      data: null,
      message: 'Mascota eliminada con exito',
    });
  } catch (e) {
    res.status(400).json({
      data: null,
      message: 'Ocurrio un error al eliminar la mascota',
    });
    // eslint-disable-next-line no-useless-return
    return;
  }
};
