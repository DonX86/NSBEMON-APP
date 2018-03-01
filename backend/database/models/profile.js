import Sequelize from 'sequelize';
import { sequelize } from '../config/configure';

const Profile = sequelize.define(
  'Profile',
  {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING
  },
  {}
);

export default Profile;