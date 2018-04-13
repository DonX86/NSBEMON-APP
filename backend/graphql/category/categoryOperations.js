const uuidv4 = require('uuid/v4');

const { CategoryModel } = require('../../dynamodb/models/categoryModel');

class CategoryOperations {
  createCategory(input, context) {
    return CategoryModel.create({
      id: uuidv4(),
      title: input.title,
      points: input.points,
    });
  }
}

module.exports.CategoryOperations = CategoryOperations;
