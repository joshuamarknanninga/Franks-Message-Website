export const chatMessageValidator = (req) => {
  const errors = [];
  if (!req.body.roomId) errors.push('Room ID is required');
  if (!req.body.displayName) errors.push('Display name is required');
  if (!req.body.content) errors.push('Message content is required');
  return errors;
};
