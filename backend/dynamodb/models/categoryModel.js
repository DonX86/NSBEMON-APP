const { db } = require('../configure');
const { CategorySchema } = require('../schemas/categorySchema');

module.exports.CategoryModel = db.model('Member', CategorySchema);
