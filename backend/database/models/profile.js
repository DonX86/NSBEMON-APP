import Sequelize from 'sequelize';
import { createModel } from './utility';

export default async () => {
  return await createModel(
    'Profile',
    {
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
    },
    {}
  );
};
