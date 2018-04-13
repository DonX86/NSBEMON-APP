const { db } = require('../configure');

module.exports.CategorySchema = new db.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    title: {
      type: String,
    },
    points: {
      type: Number,
    },
  },
  {
    throughput: { read: 1, write: 1 },
    timestamps: true,
  }
);