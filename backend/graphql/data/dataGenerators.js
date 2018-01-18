import uuidv4 from 'uuid/v4';

import { User } from './user/userType';
import { Team } from './team/teamType';

export const generateUser = () => {
  return new User({
    id: uuidv4(),
    firstName: uuidv4(),
    lastName: uuidv4(),
    isLeader: false,
  });
}
export const generateTeam = () => {
  return new Team({
    id: uuidv4(),
    name: uuidv4(),
  });
};

export const generateProfile = () => {
  return {
    firstName: uuidv4(),
    lastName: uuidv4(),
    points: Math.floor(Math.random() * 20),
  };
};
