import Sequelize from 'sequelize';
import { createModel } from './utility';

export default async () => {
  return await createModel(
    'Team',
    {
      name: Sequelize.STRING,
    },
    {}
  );
};
