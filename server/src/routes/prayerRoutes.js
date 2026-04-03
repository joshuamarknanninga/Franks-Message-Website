import { Router } from 'express';
import {
  approvePrayerRequest,
  createPrayerRequest,
  deletePrayerRequest,
  getPrayerRequestById,
  listPrayerRequests,
  publicPrayerWall,
  updatePrayerRequest,
} from '../controllers/prayerController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.get('/public-wall', publicPrayerWall);
router.get('/', auth, adminOnly, listPrayerRequests);
router.get('/:id', auth, adminOnly, getPrayerRequestById);
router.post('/', createPrayerRequest);
router.patch('/:id', auth, adminOnly, updatePrayerRequest);
router.patch('/:id/approve', auth, adminOnly, approvePrayerRequest);
router.delete('/:id', auth, adminOnly, deletePrayerRequest);

export default router;
