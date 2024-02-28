import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './database/database.js';
import userRoute from './routes/useRoutes.js';
import authRoute from './routes/authRoute.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
