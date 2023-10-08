import User from '../models/User.js';
import { hashPassword, comparePassword, generateJWTToken } from '../utils/helper.js';

export default class AuthController {
  static async register(req, res) {
    try {
      const { username, email, password } = req.body;

      const userExist = await User.findOne({ email })
      if (userExist) return res.status(400).json({ message: 'User with email already exist' });

      if (!username && !email && !password) {
        return res.status(400).json({ message: 'Fill all required fields' });
      } else {
        const user = new User({
          email,
          password: hashPassword(password),
          username,
        });
        await user.save();

        return res.status(201).json({ user });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async login(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Email and password fields are required' });
    }
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).json({ message: 'User with email does not exist' });
      }

      const checkPassword = comparePassword(req.body.password, user.password);

      if (!checkPassword) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }

      const token = generateJWTToken(user._id);

      return res.status(200).json({ message: 'Login Success', data: { user, token } });
    } catch (err) {
      return res.status(500).json({ message: 'Something went wrong!' });
    }
  }

}
