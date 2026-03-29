import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import env from '../config/env.js';
import User from '../models/User.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';

const signToken = (user) =>
  jwt.sign({ sub: user._id.toString(), role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });

export const seedAdminIfMissing = asyncHandler(async (_req, res) => {
  if (!env.adminEmail || !env.adminPassword) {
    throw new ApiError(400, 'Set ADMIN_EMAIL and ADMIN_PASSWORD in env');
  }

  const exists = await User.findOne({ email: env.adminEmail.toLowerCase() });
  if (exists) {
    return res.json({ message: 'Admin already exists' });
  }

  const passwordHash = await bcrypt.hash(env.adminPassword, 10);
  const user = await User.create({
    name: 'Frank Admin',
    email: env.adminEmail,
    passwordHash,
    role: 'admin',
  });

  return res.status(201).json({ data: { id: user._id, email: user.email } });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: String(email).toLowerCase() });
  if (!user || !user.isActive) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid credentials');
  }

  user.lastLoginAt = new Date();
  await user.save();

  const token = signToken(user);

  res.json({
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

export const me = asyncHandler(async (req, res) => {
  res.json({ data: req.user });
});
