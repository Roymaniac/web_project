import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true },
);

userSchema.set('toJSON', {
  transform: (doc, {
    password, createdAt, updatedAt, __v, ...userData
  }, options) => userData,
});

const User = mongoose.model('User', userSchema);
export default User;
