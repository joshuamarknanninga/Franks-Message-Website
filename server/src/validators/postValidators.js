export const postValidator = (req) => {
  const errors = [];
  if (!req.body.title) errors.push('Title is required');
  if (!req.body.excerpt) errors.push('Excerpt is required');
  if (!req.body.body) errors.push('Body is required');
  return errors;
};
