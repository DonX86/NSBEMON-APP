import Sequelize from 'sequelize';
import { sequelize } from '../config/configure';

const Comment = sequelize.define(
  'Comment',
  {
    text: Sequelize.STRING
  },
  {}
);

export default Comment;
