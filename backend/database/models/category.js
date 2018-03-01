import Sequelize from 'sequelize';
import { sequelize } from '../config/configure';

const Category = sequelize.define(
  'Category',
  {
    title: Sequelize.STRING,
    points: Sequelize.INTEGER
  },
  {}
);

export default Category;
