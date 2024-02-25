import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './database/database.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });