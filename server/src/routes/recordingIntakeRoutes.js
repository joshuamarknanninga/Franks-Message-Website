import { Router } from 'express';
import {
  createRecordingIntake,
  listRecordingIntakes,
  updateRecordingIntake,
} from '../controllers/recordingIntakeController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.post('/', createRecordingIntake);
router.get('/', auth, adminOnly, listRecordingIntakes);
router.patch('/:id', auth, adminOnly, updateRecordingIntake);

export default router;
