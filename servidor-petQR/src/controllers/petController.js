import PetModel from '../models/petSchema.js';

export const getPets = async (req, res) => {
  try {
    const data = await PetModel.find({});

    // Imprime los datos de cada mascota en la consola para depurar
    console.log(data);

    const petData = data.map((pet) => ({
      id: pet._id, // Accede directamente a _id sin necesidad de _doc
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
