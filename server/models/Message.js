import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chatroom', // Reference to the Chatroom model
        required: true,
    },
},
    { timestamps: true },
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
