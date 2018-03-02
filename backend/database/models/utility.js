import { getInstance } from '../config/configure';

/**
 * Will create a model for our database given a name, sequelize schema, and options
 * 
 * @param {String} name 
 * @param {Object} schema 
 * @param {Object} options 
 * @returns Sequelize Model
 */
export const createModel = async (name, schema, options) => {
  const instance = await getInstance();
  return instance.define(name, schema, options);
};