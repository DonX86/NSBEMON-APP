const { db } = require('../configure');

module.exports.MemberSchema = new db.Schema(
  {
    email: {
      type: String,
      hashkey: true,
    },
    encryptedPassword: {
      type: String,
    },
    isLeader: {
      type: Boolean,
    },
    isAdmin: {
      type: Boolean,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    team: {
      type: String,
    },
  },
  {
    throughput: { read: 1, write: 1 },
    timestamps: true,
  }
);
