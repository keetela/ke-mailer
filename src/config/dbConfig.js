import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    url: process.env.DATABASE_URL_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV || "localhost",
    dialect: 'postgres',
    operatorsAliases: false,
    logging: true,
  },
  test: {
    use_env_variable: process.env.DATABASE_URL_TEST,
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    use_env_variable: process.env.DATABASE_URL_PROD,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  }
};

module.exports = config;
