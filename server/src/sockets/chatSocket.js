import ChatMessage from '../models/ChatMessage.js';
import { hasProfanity, sanitizeMessage } from '../services/moderation/profanityFilter.js';

const registerChatSocket = (io, socket) => {
  socket.on('chat:join', ({ roomSlug }) => {
    socket.join(roomSlug);
  });

  socket.on('chat:leave', ({ roomSlug }) => {
    socket.leave(roomSlug);
  });

  socket.on('chat:send', async (payload) => {
    const content = sanitizeMessage(payload.content);
    const outgoing = {
      roomSlug: payload.roomSlug,
      displayName: payload.displayName,
      content,
      createdAt: new Date(),
      isFlagged: hasProfanity(content),
    };

    io.to(payload.roomSlug).emit('chat:message', outgoing);

    if (payload.roomId) {
      await ChatMessage.create({
        room: payload.roomId,
        displayName: payload.displayName,
        user: payload.userId || null,
        content,
        isFlagged: outgoing.isFlagged,
      });
    }
  });
};

export default registerChatSocket;
