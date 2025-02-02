import { configDotenv } from "dotenv";
import { z } from "zod";

// Load environment variables from .env file
configDotenv();

const envSchema = z.object({
  API_KEY: z.string().min(1).optional(),
  GROUP_ID: z.string().min(1).optional(),
  USER_ID: z.string().min(1).optional(),
});

const env = envSchema.parse(process.env);
export default env;