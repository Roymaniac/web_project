import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config.js';

export const generateJWTToken = (userId) => jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });

export const hashPassword = (password, saltRounds = 10) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, userPassword) => bcrypt.compareSync(password, userPassword);
