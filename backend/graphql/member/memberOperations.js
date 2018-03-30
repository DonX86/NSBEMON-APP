import uuidv4 from 'uuid/v4';
import forge from 'node-forge';
import getDbInstance from '../../database/models/db';

export default class MemberOperations {
  ///////////////////////////////////////////////////////////
  //////////////////// QUERIES //////////////////////////////
  ///////////////////////////////////////////////////////////
  memberGetByUsernamePassword = async (input) => {
    console.log('getByUsPass', input);
    const encryptedPassword = forge.md.sha256.create();
    encryptedPassword.update(input.password);

    const db = await getDbInstance();
    return db.Member.findOne({
      where: {
        username: input.username,
        encryptedPassword: encryptedPassword.digest().toHex(),
      },
      raw: true,
    });
  };

  ///////////////////////////////////////////////////////////
  //////////////////// MUTATIONS ////////////////////////////
  ///////////////////////////////////////////////////////////
  memberCreate = async (input) => {
    // Auto generate a username and password for a user
    const username = uuidv4();
    const password = uuidv4();
    const encryptedPassword = forge.md.sha256.create();
    encryptedPassword.update(password);

    console.log('username', username);
    console.log('password', password);

    const db = await getDbInstance();
    const [newProfile, newMember] = await Promise.all([
      // Create a profile
      db.Profile.create({
        id: uuidv4(),
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
      }),
      // Create a Member
      db.Member.create({
        id: uuidv4(),
        isLeader: input.isLeader,
        username,
        encryptedPassword: encryptedPassword.digest().toHex(),
      }),
    ]);

    newMember.setProfile(newProfile);

    return newMember.dataValues;
  };

  memberAddToTeam = async (input, context) => {
    return input.entries.map((entry) => {
      return this.singleMemberAddToTeam(entry, context);
    });
  };

  ///////////////////////////////////////////////////////////
  //////////////////// HELPERS //////////////////////////////
  ///////////////////////////////////////////////////////////
  singleMemberAddToTeam = async (input) => {
    const db = await getDbInstance();
    const updatedMember = await db.Member.update(
      {
        TeamId: input.teamId,
      },
      {
        where: { id: input.memberId },
        returning: true,
        plain: true,
      },
    );
    return updatedMember;
  }
}
