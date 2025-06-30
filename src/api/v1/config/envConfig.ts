// import { config } from "dotenv";
// import { resolve } from "path";

// // Determine environment, default to development
// const env = process.env.NODE_ENV || "development";
// const envFile = env === "production" ? ".env.production" : ".env.development";

// // Load environment variables
// const envPath = resolve(__dirname, "../../../../environments", envFile);
// const result = config({ path: envPath });

// if (result.error) {
//   console.error(`Failed to load environment file: ${envPath}`, result.error);
//   process.exit(1);
// }

// console.log(`Loaded environment: ${env} from ${envPath}`);

// export const envConfig = {
//   nodeEnv: env,
//   databaseUrl: process.env.DATABASE_URL as string,
//   jwtSecret: process.env.JWT_SECRET as string,
// };
