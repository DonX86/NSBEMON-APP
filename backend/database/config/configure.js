import Sequelize from 'sequelize';
import config from './config';

const env = process.env.NODE_ENV || "development";

console.log('loading db');

export const sequelize = new Sequelize(config[env]["use_env_variable"], {});