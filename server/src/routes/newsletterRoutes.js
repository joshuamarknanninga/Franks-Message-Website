import { Router } from 'express';
import {
  createSubscriber,
  deleteSubscriber,
  getSubscriberById,
  listSubscribers,
  updateSubscriber,
} from '../controllers/newsletterController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.get('/', auth, adminOnly, listSubscribers);
router.get('/:id', auth, adminOnly, getSubscriberById);
router.post('/', createSubscriber);
router.patch('/:id', auth, adminOnly, updateSubscriber);
router.delete('/:id', auth, adminOnly, deleteSubscriber);

export default router;
