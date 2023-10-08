import express from 'express';
import messageController from '../controllers/messageController.js';

const router = express.Router();

router.post('/', messageController.createMessage);
router.get('/:roomId', messageController.getMessagesByChatroom);

export default router;