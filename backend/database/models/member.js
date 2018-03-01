import Sequelize from 'sequelize';
import { sequelize } from '../config/configure';

const Member = sequelize.define(
  'Member',
  {
    isLeader: Sequelize.BOOLEAN,
    username: Sequelize.STRING,
    encryptedPassword: Sequelize.STRING
  },
  {}
);

export default Member;
