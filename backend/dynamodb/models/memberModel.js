const { db } = require('../configure');
const { MemberSchema } = require('../schemas/memberSchema');

module.exports.MemberModel = db.model('Member', MemberSchema, { update: true });
