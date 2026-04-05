import { Router } from 'express';
import {
  createTag,
  deleteTag,
  getTagById,
  listTags,
  prepareTagPayload,
  updateTag,
} from '../controllers/tagController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.get('/', listTags);
router.get('/:id', getTagById);
router.post('/', auth, adminOnly, prepareTagPayload, createTag);
router.patch('/:id', auth, adminOnly, prepareTagPayload, updateTag);
router.delete('/:id', auth, adminOnly, deleteTag);

export default router;
