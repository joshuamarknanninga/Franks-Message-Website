import { Router } from 'express';
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

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ message: 'Server is healthy' });
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

export default router;
