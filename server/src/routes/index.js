import { Router } from 'express';
import mongoose from 'mongoose';
import authRoutes from './authRoutes.js';
import postRoutes from './postRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import tagRoutes from './tagRoutes.js';
import audioRoutes from './audioRoutes.js';
import videoRoutes from './videoRoutes.js';
import chatRoutes from './chatRoutes.js';
import prayerRoutes from './prayerRoutes.js';
import newsletterRoutes from './newsletterRoutes.js';
import productRoutes from './productRoutes.js';
import recordingIntakeRoutes from './recordingIntakeRoutes.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    message: 'Server is healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'offline',
  });
});

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);
router.use('/audio', audioRoutes);
router.use('/videos', videoRoutes);
router.use('/chat', chatRoutes);
router.use('/prayer-requests', prayerRoutes);
router.use('/newsletter-subscribers', newsletterRoutes);
router.use('/products', productRoutes);
router.use('/recording-intakes', recordingIntakeRoutes);

export default router;
