import getCategory from './category';
import getComment from './comment';
import getMember from './member';
import getProfile from './profile';
import getTeam from './team';
import getTraining from './training';

let db;

export default async () => {

  if (!db) {
    const [
      Member,
      Team,
      Profile,
      Comment,
      Category,
      Training
    ] = await Promise.all([
      getMember(),
      getTeam(),
      getProfile(),
      getComment(),
      getCategory(),
      getTraining(),
    ]);

    // Member associations
    Member.belongsTo(Team);
    Member.hasOne(Profile);
    Member.hasMany(Training);

    // Team associations
    Team.hasMany(Member);

    // Profile associations
    Profile.hasOne(Member);

    // Training associations
    Training.belongsTo(Member);
    Training.belongsTo(Category);

    // Comment associations
    Comment.belongsTo(Training);
    Comment.belongsTo(Member);

    db = { Category, Comment, Member, Profile, Team, Training };
  }
  return db;
};
