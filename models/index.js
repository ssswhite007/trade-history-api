import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const db = {
  sequelize,
  Sequelize,
};

export { sequelize, db };