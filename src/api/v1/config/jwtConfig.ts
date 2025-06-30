import jwt from 'jsonwebtoken';
import { envConfig } from './envConfig';

interface JwtPayload {
  userId: number;
  email: string;
  role: string;
}

export const generateTokens = (userId: number, email: string, role: string) => {
  const accessToken = jwt.sign(
    { userId, email, role },
    envConfig.jwtSecret,
    { expiresIn: '4h' } // Access token expires in 4 hours
  );

  const refreshToken = jwt.sign(
    { userId, email, role },
    envConfig.jwtSecret,
    { expiresIn: '30d' } // Refresh token expires in 1 month
  );

  return { accessToken, refreshToken };
};

export const verifyRefreshToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, envConfig.jwtSecret) as JwtPayload;
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};