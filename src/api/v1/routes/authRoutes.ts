import { Router } from 'express';
import { login, refreshToken } from '../controllers/authController';
import { validateLogin, validateRefreshToken } from '../validations/authValidation';

const router = Router();

router.post('/login', validateLogin, login);
router.post('/refresh-token', validateRefreshToken, refreshToken);

export default router;