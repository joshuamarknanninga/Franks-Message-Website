import ChatMessage from '../models/ChatMessage.js';
import ChatRoom from '../models/ChatRoom.js';
import { sanitizeMessage, hasProfanity } from '../services/moderation/profanityFilter.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';

export const listRooms = asyncHandler(async (_req, res) => {
  const rooms = await ChatRoom.find({ isActive: true }).sort({ name: 1 });
  res.json({ data: rooms });
});

export const createRoom = asyncHandler(async (req, res) => {
  const room = await ChatRoom.create(req.body);
  res.status(201).json({ data: room });
});

export const listMessages = asyncHandler(async (req, res) => {
  const messages = await ChatMessage.find({ room: req.params.roomId, isDeleted: false })
    .sort({ createdAt: -1 })
    .limit(100);
  res.json({ data: messages.reverse() });
});

export const createMessage = asyncHandler(async (req, res) => {
  const { roomId, displayName, content, userId } = req.body;
  const room = await ChatRoom.findById(roomId);
  if (!room) throw new ApiError(404, 'Chat room not found');

  const text = sanitizeMessage(content);
  const message = await ChatMessage.create({
    room: roomId,
    displayName,
    user: userId || null,
    content: text,
    isFlagged: hasProfanity(text),
  });

  res.status(201).json({ data: message });
});
