import jwt from 'jsonwebtoken';
import env from '../config/env.js';
import User from '../models/User.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';

const auth = asyncHandler(async (req, _res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    throw new ApiError(401, 'Authentication required');
  }

  const decoded = jwt.verify(token, env.jwtSecret);
  const user = await User.findById(decoded.sub).select('-passwordHash');

  if (!user || !user.isActive) {
    throw new ApiError(401, 'Invalid authentication token');
  }

  req.user = user;
  next();
});

export default auth;
