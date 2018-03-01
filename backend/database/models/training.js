import Sequelize from 'sequelize';
import { sequelize } from '../config/configure';

const Training = sequelize.define(
  'Training',
  {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    imageURL: Sequelize.STRING
  },
  {}
);

export default Training;