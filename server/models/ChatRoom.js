import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    name: { type: String },
    users: [{ type: String }],
  },
  { timestamps: true },
);

roomSchema.set('toJSON', {
  transform: (doc, {
    __v, createdAt, updatedAt, ...roomData
  }, options) => roomData,
});

const ChatRoom = mongoose.model('Room', roomSchema);

export default ChatRoom;
