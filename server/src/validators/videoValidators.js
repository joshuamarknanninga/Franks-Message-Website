export const videoValidator = (req) => {
  const errors = [];
  if (!req.body.title) errors.push('Title is required');
  if (!req.body.youtubeVideoId) errors.push('YouTube Video ID is required');
  return errors;
};
