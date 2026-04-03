import { Router } from 'express';
import { createMessage, createRoom, listMessages, listRooms } from '../controllers/chatController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import validate from '../middleware/validate.js';
import { chatMessageValidator } from '../validators/chatValidators.js';

const router = Router();

router.get('/rooms', listRooms);
router.post('/rooms', auth, adminOnly, createRoom);
router.get('/rooms/:roomId/messages', listMessages);
router.post('/messages', validate(chatMessageValidator), createMessage);

export default router;
