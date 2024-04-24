import 'dotenv/config'; // make sure to install dotenv package
import type { Config } from 'drizzle-kit';

export default {
  driver: 'mysql2',
  out: './src/drizzle/dbauth',
  schema: './src/drizzle/dbauth/schema.ts',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  strict: true,
} satisfies Config;