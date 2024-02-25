import UserModel from '../models/userSchema.js';

export const getUsers = async (_, res) => {
    try {
      const data = await UserModel.find();
  
      const filterData = data.map((user) => ({
        id: user._doc._id,
        firstname: user._doc.firstname,
        lastname: user._doc.lastname,
        email: user._doc.email,
        isAdmin: user._doc.isAdmin,
      }));
  
      res.json({ data: filterData, message: 'Usuarios encontrados' });
    } catch (e) {
      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al conectarse a la DB',
      });
    }
  };
  