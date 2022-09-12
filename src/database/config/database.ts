import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'Softeo#2022',
  database: 'DENTIST_OFFICE',
  host: process.env.DB_URL || 'db.rcwhkbqjmjckfkdexrlj.supabase.co',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
