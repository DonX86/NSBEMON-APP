import uuidv4 from 'uuid/v4';
import getDbInstance from '../../database/models/db';

export default class TeamOperations {

  teamCreate = async (input) => {

    const db = await getDbInstance();
    const newTeam = await db.Team.create({ id: uuidv4(), name: input.name });

    return newTeam.dataValues;
  }
}