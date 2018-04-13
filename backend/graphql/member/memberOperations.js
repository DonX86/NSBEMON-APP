const uuidv4 = require('uuid/v4');
const forge = require('node-forge');

const { MemberModel } = require('../../dynamodb/models/memberModel');

class MemberOperations {
  ///////////////////////////////////////////////////////////
  //////////////////// QUERIES //////////////////////////////
  ///////////////////////////////////////////////////////////
  memberGetByEmailPassword(input) {
    console.log('getByUsPass', input);
    const encryptedPassword = forge.md.sha256.create();
    encryptedPassword.update(input.password);

    return MemberModel.queryOne({ email: input.email })
      .filter('encryptedPassword')
      .eq(encryptedPassword.digest().toHex())
      .exec();
  }

  memberGetAll() {
    return MemberModel.scan().exec();
  }

  ///////////////////////////////////////////////////////////
  //////////////////// MUTATIONS ////////////////////////////
  ///////////////////////////////////////////////////////////
  memberCreate(input) {
    // Auto generate password for a user
    const password = uuidv4();
    const encryptedPassword = forge.md.sha256.create();
    encryptedPassword.update(password);

    console.log('password', password);

    return MemberModel.create({
      email: input.email,
      isLeader: input.isLeader,
      encryptedPassword: encryptedPassword.digest().toHex(),
      firstName: input.firstName,
      lastName: input.lastName,
      isAdmin: false,
      team: 'none',
    });
  }

  memberAddToTeam(input, context) {
    return MemberModel.batchPut(
      input.memberEmails((email) => ({
        email,
        team: input.team,
      }))
    );
  }

  ///////////////////////////////////////////////////////////
  //////////////////// HELPERS //////////////////////////////
  ///////////////////////////////////////////////////////////
}

module.exports.MemberOperations = MemberOperations;
