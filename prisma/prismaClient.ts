import { PrismaClient } from '@prisma/client';
import { envConfig } from '../src/api/v1/config/envConfig';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envConfig.databaseUrl,
    },
  },
});

export default prisma;