import { Router } from 'express';
import {
  createAudio,
  deleteAudio,
  getAudioById,
  listAudio,
  prepareAudioPayload,
  updateAudio,
} from '../controllers/audioController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import validate from '../middleware/validate.js';
import { audioValidator } from '../validators/audioValidators.js';

const router = Router();

router.get('/', listAudio);
router.get('/:id', getAudioById);
router.post('/', auth, adminOnly, prepareAudioPayload, validate(audioValidator), createAudio);
router.patch('/:id', auth, adminOnly, prepareAudioPayload, updateAudio);
router.delete('/:id', auth, adminOnly, deleteAudio);

export default router;
