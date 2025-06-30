import prisma from "../../../prisma/prismaClient";
import { generateTokens, verifyRefreshToken } from "../config/jwtConfig";

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  if (user.password !== password) {
    throw new Error("Invalid email or password");
  }

  const { accessToken, refreshToken } = generateTokens(
    user.id,
    user.email,
    user.role
  );
  return { accessToken, refreshToken };
};

export const refreshUserToken = async (token: string) => {
  const payload = verifyRefreshToken(token);
  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user) {
    throw new Error("Invalid refresh token");
  }

  const { accessToken, refreshToken } = generateTokens(
    user.id,
    user.email,
    user.role
  );
  return { accessToken, refreshToken };
};
