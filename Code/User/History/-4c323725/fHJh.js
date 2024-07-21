import './load-env.js';

/** @type { import("drizzle-kit").Config } */
const config = {
  schema: './build/models',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    ssl: { rejectUnauthorized: false },
  },
};

export default config;