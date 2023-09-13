import User from '../models/User.js';
import { hashPassword, comparePassword, generateJWTToken } from '../utils/helper.js';

export default class AuthController {
  static async register(req, res) {
    try {
      const { username, email, password } = req.body;

      if (!username && !email && !password) {
        res.status(400).json({ message: 'Fill all required fields' });
      } else {
        const user = new User({
          email,
          password: hashPassword(password),
          username,
        });
        await user.save();

        res.status(201).json({ user });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ message: 'Email and password fields are required' });
      }
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: 'User with email does not exist' });
      }

      const checkPassword = comparePassword(password, user.password);

      if (!checkPassword) {
        res.status(400).json({ message: 'Invalid Credentials' });
      }

      const token = generateJWTToken(user._id);

      res.status(200).json({ message: 'Login Success', data: { user, token } });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong!' });
    }
  }
}
