export const loginValidator = (req) => {
  const errors = [];
  if (!req.body.email) errors.push('Email is required');
  if (!req.body.password) errors.push('Password is required');
  return errors;
};
