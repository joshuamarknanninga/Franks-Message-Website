import { Router } from 'express';
import { login, me, seedAdminIfMissing } from '../controllers/authController.js';
import auth from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { loginValidator } from '../validators/authValidators.js';

const router = Router();

router.post('/seed-admin', seedAdminIfMissing);
router.post('/login', validate(loginValidator), login);
router.get('/me', auth, me);

export default router;
