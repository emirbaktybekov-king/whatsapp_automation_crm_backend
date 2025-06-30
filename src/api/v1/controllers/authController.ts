import { Request, Response } from 'express';
import { loginUser, refreshUserToken } from '../services/authService';
import { LoginRequest, RefreshTokenRequest } from '../types/authTypes';

export const login = async (req: Request<{}, {}, LoginRequest>, res: Response) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await loginUser(email, password);
    res.json({ accessToken, refreshToken });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};

export const refreshToken = async (req: Request<{}, {}, RefreshTokenRequest>, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await refreshUserToken(refreshToken);
    res.json(tokens);
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};