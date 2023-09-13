import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { PORT, DB_URI } from './utils/config.js';
import authRoute from './routes/authRoute.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'view'));

dotenv.config();
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/v1/', authRoute);

app.use('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
