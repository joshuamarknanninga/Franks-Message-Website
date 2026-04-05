import { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  listCategories,
  prepareCategoryPayload,
  updateCategory,
} from '../controllers/categoryController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.get('/', listCategories);
router.get('/:id', getCategoryById);
router.post('/', auth, adminOnly, prepareCategoryPayload, createCategory);
router.patch('/:id', auth, adminOnly, prepareCategoryPayload, updateCategory);
router.delete('/:id', auth, adminOnly, deleteCategory);

export default router;
