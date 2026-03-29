const registerPresenceSocket = (io, socket) => {
  socket.on('presence:join', ({ roomSlug, displayName }) => {
    socket.join(roomSlug);
    socket.to(roomSlug).emit('presence:update', {
      message: `${displayName} joined the room`,
      at: new Date(),
    });
  });
};

export default registerPresenceSocket;
