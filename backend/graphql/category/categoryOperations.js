import uuidv4 from 'uuid/v4';
import getDbInstance from '../../database/models/db';


export default class CategoryOperations {

  createCategory = async (input, context) => {
    console.log('input', input);
    console.log('context', context);

    const db = await getDbInstance();
    const newCategory = await db.Category.create({ 
      id: uuidv4(), 
      title: input.title, 
      points: input.points 
    });

    return newCategory.dataValues;
  }
}