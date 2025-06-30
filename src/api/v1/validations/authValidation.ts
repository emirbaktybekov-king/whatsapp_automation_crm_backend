import { Request, Response, NextFunction } from 'express';
import { LoginRequest, RefreshTokenRequest } from '../types/authTypes';

export const validateLogin = (req: Request<{}, {}, LoginRequest>, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  next();
};

export const validateRefreshToken = (req: Request<{}, {}, RefreshTokenRequest>, res: Response, next: NextFunction) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ error: 'Refresh token is required' });
  }
  next();
};