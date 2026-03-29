import ApiError from '../utils/ApiError.js';

const validate = (validator) => (req, _res, next) => {
  const errors = validator(req);

  if (errors.length) {
    throw new ApiError(400, errors.join(', '));
  }

  next();
};

export default validate;
