import Sequelize from 'sequelize';
import { sequelize } from '../config/configure';

const Team = sequelize.define(
  'Team',
  {
    name: Sequelize.STRING
  },
  {}
);

export default Team;
