const { db } = require('../configure');

module.exports.TrainingSchema = new db.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    approved: {
      type: Boolean,
    },
    category: {
      type: String,
    },
  },
  {
    throughput: { read: 1, write: 1 },
    timestamps: true,
  }
);
