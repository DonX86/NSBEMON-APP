const { db } = require('../configure');

module.exports.CategorySchema = new db.Schema(
  {
    title: {
      type: String,
      hashKey: true,
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