const { db } = require('../configure');
const { TrainingSchema } = require('../schemas/trainingSchema');

module.exports.TrainingModel = db.model('Member', TrainingSchema);
