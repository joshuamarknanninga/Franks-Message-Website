import { Server } from 'socket.io';
import env from '../config/env.js';
import registerChatSocket from './chatSocket.js';
import registerPresenceSocket from './presenceSocket.js';

const initializeSockets = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: env.clientUrl,
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    registerChatSocket(io, socket);
    registerPresenceSocket(io, socket);
  });

  return io;
};

export default initializeSockets;
