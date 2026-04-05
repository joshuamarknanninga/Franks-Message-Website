export const audioValidator = (req) => {
  const errors = [];
  if (!req.body.title) errors.push('Title is required');
  if (!req.body.audioUrl) errors.push('Audio URL is required');
  if (!req.body.duration) errors.push('Duration is required');
  return errors;
};
