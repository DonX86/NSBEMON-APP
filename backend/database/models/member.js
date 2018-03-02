import Sequelize from 'sequelize';
import { createModel } from './utility';

export default async () => {
  return await createModel(
    'Member',
    {
      isLeader: Sequelize.BOOLEAN,
      username: Sequelize.STRING,
      encryptedPassword: Sequelize.STRING,
    },
    {}
  );
};