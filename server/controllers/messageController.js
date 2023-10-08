import Message from '../models/Message.js';


export default class MessageController {
    static async createMessage(req, res) {
        try {
            const { text, sender, chatroom } = req.body;

            const message = new Message({ text, sender, chatroom });
            await message.save();

            return res.status(201).json(message);
        } catch (error) {
            return res.status(500).json({ error: 'Error creating message' });
        }
    }

    static async getMessagesByChatroom(req, res) {
        try {
            const { roomId } = req.params;

            const messages = await Message.find({ room: roomId }).populate('sender', 'username');

            return res.status(200).json(messages);
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching messages' });
        }
    }
}