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
        direccion: pet.direccion,
        numberphone: pet.numberphone,
        content: pet.content,
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

export const getPetById = async (req, res) => {
  try {
    const petId = req.params.id; // Suponiendo que el id se pasa como parámetro en la URL
    const pet = await PetModel.findById(petId);

    if (!pet) {
      return res.status(404).json({
        data: null,
        message: 'No se encontró ninguna mascota con el ID proporcionado',
      });
    }

    if (!pet.isActive) {
      return res.status(404).json({
        data: null,
        message: 'La mascota con el ID proporcionado no está activa',
      });
    }

    const petData = {
      id: pet._id,
      name: pet.name,
      tipo: pet.tipo,
      raza: pet.raza,
      direccion: pet.direccion,
      numberphone: pet.numberphone,
      content: pet.content,
      image: pet.image,
      userID: pet.userID,
    };

    res.json({ data: petData, message: 'Mascota encontrada' });
  } catch (error) {
    console.error('Error al obtener la mascota por ID:', error);
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error al obtener la mascota por ID',
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
  console.log(id);
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
