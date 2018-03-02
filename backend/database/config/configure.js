import Sequelize from 'sequelize';
import config from './config';

const env = process.env.NODE_ENV || 'development';

let sequelize;

/**
 * Creates and returns a Sequelize DB connection
 *
 * @returns Sequelize DB Connection
 */
export const getInstance = async () => {
  if (!sequelize) {
    sequelize = new Sequelize(config[env]['use_env_variable'], {});
  }
  return sequelize;
};
