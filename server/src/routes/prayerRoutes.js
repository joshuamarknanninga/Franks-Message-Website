import { Router } from 'express';
import {
  createPrayerRequest,
  deletePrayerRequest,
  getPrayerRequestById,
  listPrayerRequests,
  updatePrayerRequest,
} from '../controllers/prayerController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.get('/', auth, adminOnly, listPrayerRequests);
router.get('/:id', auth, adminOnly, getPrayerRequestById);
router.post('/', createPrayerRequest);
router.patch('/:id', auth, adminOnly, updatePrayerRequest);
router.delete('/:id', auth, adminOnly, deletePrayerRequest);

export default router;
