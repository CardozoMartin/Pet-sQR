import PetModel from '../models/petSchema.js';

export const getPets = async (req, res) => {
  try {
    const data = await PetModel.find({});

    const petData = data.map((pet) => ({
      id: pet._id,
      name: pet.name,
      tipo: pet.tipo,
      raza: pet.raza,
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
  const { body } = req;

  const newPet = new PetModel({
    name: body.name,
    tipo: body.tipo,
    raza: body.raza,
    userID: body.userID,
  });

  try {
    await newPet.save();
    res.status(201).json({
      data: null,
      message: 'Mascota agregada con exito',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrio un error al guardar la mascota',
    });
  }
};

export const putPet = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

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
    const actionPet = await PetModel.updateOne({ _id: id });
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
