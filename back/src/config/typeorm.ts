import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { registerAs } from '@nestjs/config';

config({ path: '.env.development' });
console.log({
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
const db_config = {
  type: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,  // Cambia esto según la configuración de tu servidor
  },
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  connectTimeout: 60000,
  // entities: ['dist/**/entities/*.entity.{ts,js}'],
  // migrations: ['dist/migrations/*.{js,ts}'],
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
};

export default registerAs('typeorm', () => db_config);

export const connectionSource = new DataSource(db_config as DataSourceOptions);
