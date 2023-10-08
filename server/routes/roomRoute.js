import express from 'express';
import ChatController from '../controllers/chatController.js';

const router = express.Router();

router.post('/', ChatController.createChatRoom);
router.get('/', ChatController.getAllChatRooms);
router.get('/:roomId', ChatController.getChatRoomById);

export default router;