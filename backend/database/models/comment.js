import Sequelize from 'sequelize';
import { createModel } from './utility';

export default async () => {
  return await createModel(
    'Comment',
    {
      text: Sequelize.STRING,
    },
    {}
  );
};