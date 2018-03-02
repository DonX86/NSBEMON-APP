import Sequelize from 'sequelize';
import { createModel } from './utility';

export default async () => {
  return await createModel(
    'Training',
    {
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      imageURL: Sequelize.STRING,
    },
    {}
  );
};
