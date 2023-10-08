import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { PORT, DB_URI } from './utils/config.js';
import authRoute from './routes/authRoute.js';
import roomRoute from './routes/roomRoute.js';
import messageRoute from './routes/messageRoute.js';
import initializeSocket from './utils/socket.js';

const app = express();
const server = http.createServer(app);
initializeSocket(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'view'));

dotenv.config();
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/v1/users', authRoute);
app.use("api/v1/rooms", roomRoute);
app.use('/api/v1/messages', messageRoute);

app.use('*', (req, res) => {
  res.render('404');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
