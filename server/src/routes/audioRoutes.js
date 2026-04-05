import { Router } from 'express';
import {
  createAudio,
  deleteAudio,
  getAudioById,
  listAudio,
  podcastRss,
  quickPublishAudio,
  updateAudio,
} from '../controllers/audioController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import validate from '../middleware/validate.js';
import { audioValidator } from '../validators/audioValidators.js';

const router = Router();

router.get('/rss.xml', podcastRss);
router.get('/', listAudio);
router.get('/:id', getAudioById);
router.post('/', auth, adminOnly, validate(audioValidator), createAudio);
router.post('/quick-publish', auth, adminOnly, validate(audioValidator), quickPublishAudio);
router.patch('/:id', auth, adminOnly, updateAudio);
router.delete('/:id', auth, adminOnly, deleteAudio);

export default router;
