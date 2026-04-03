import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPostById,
  getSeriesByName,
  listPosts,
  listPostSeries,
  preparePostPayload,
  updatePost,
} from '../controllers/postController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import validate from '../middleware/validate.js';
import { postValidator } from '../validators/postValidators.js';

const router = Router();

router.get('/', listPosts);
router.get('/series', listPostSeries);
router.get('/series/:seriesName', getSeriesByName);
router.get('/:id', getPostById);
router.post('/', auth, adminOnly, preparePostPayload, validate(postValidator), createPost);
router.patch('/:id', auth, adminOnly, preparePostPayload, updatePost);
router.delete('/:id', auth, adminOnly, deletePost);

export default router;
