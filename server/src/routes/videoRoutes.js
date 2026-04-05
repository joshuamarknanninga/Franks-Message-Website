import { Router } from 'express';
import { createVideo, deleteVideo, getVideoById, listVideos, updateVideo } from '../controllers/videoController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import validate from '../middleware/validate.js';
import { videoValidator } from '../validators/videoValidators.js';

const router = Router();

router.get('/', listVideos);
router.get('/:id', getVideoById);
router.post('/', auth, adminOnly, validate(videoValidator), createVideo);
router.patch('/:id', auth, adminOnly, updateVideo);
router.delete('/:id', auth, adminOnly, deleteVideo);

export default router;
