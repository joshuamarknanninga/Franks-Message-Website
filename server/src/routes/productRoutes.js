import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  prepareProductPayload,
  updateProduct,
} from '../controllers/productController.js';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', auth, adminOnly, prepareProductPayload, createProduct);
router.patch('/:id', auth, adminOnly, prepareProductPayload, updateProduct);
router.delete('/:id', auth, adminOnly, deleteProduct);

export default router;
