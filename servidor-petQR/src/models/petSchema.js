import mongoose from 'mongoose';

const Pet = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  raza: {
    type: String,
    require: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  userID: {
    type: String,
    required: true,
  },
  isActive: Boolean,
});

export default mongoose.model('Pets', Pet);
