import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'b290e0b84085cf',
  password: process.env.DB_PASS || '82a77c51',
  database: 'DRA_ERICA_DB',
  host: process.env.CLEARDB_DATABASE_URL || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
