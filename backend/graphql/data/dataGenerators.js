import uuidv4 from 'uuid/v4';

import { User } from './user/userType';
import { Team } from './team/teamType';

export const generateUser = (isLeader, someTeam) => {
  return new User({
    id: uuidv4(),
    firstName: uuidv4(),
    lastName: uuidv4(),
    isLeader: isLeader,
    team: someTeam,
  });
}
export const generateTeam = () => {
  return new Team({
    id: uuidv4(),
    name: uuidv4(),
    leader: generateUser(true),
    members: Array(...Array(3)).map(() => generateUser(false)),
  });
};
