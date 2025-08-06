import { configDotenv } from "dotenv";
import { z } from "zod";

// Load environment variables from .env file
configDotenv();

const envSchema = z.object({
  API_KEY: z.string().min(1).optional(),
  GROUP_ID: z.string().min(1).optional(),
  USER_ID: z.string().min(1).optional(),
});

// Transform empty strings to undefined before parsing
const transformedEnv = Object.fromEntries(
  Object.entries(process.env).map(([key, value]) => [
    key,
    value === "" ? undefined : value
  ])
);

const env = envSchema.parse(transformedEnv);
export default env;