import PetModel from '../models/petSchema.js';

export const getPets = async (req, res) => {
  try {
    const data = await PetModel.find({});
    const petData = data
      .filter((pet) => pet._doc.isActive === true)
      .map((pet) => ({
        id: pet._doc._id,
        name: pet._doc._name,
        tipo: pet._doc._tipo,
        raza: pet._doc._raza,
        userID: pet._doc._userID,
      }));
    res.json({ data: petData, message: 'Mascotas encontradas' });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error',
    });
  }
};
