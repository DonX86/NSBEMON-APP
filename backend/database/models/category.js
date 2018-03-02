import Sequelize from 'sequelize';
import { createModel } from './utility';

export default async () => {
  return await createModel(
    'Category',
    {
      title: Sequelize.STRING,
      points: Sequelize.INTEGER,
    },
    {}
  );
};

