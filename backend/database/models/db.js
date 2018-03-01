import Category from './category';
import Comment from './comment';
import Member from './member';
import Profile from './profile';
import Team from './team';
import Training from './training';

// Member associations
Member.belongsTo(Team);
Member.hasOne(Profile);
Member.hasMany(Comment);

// Team assocations
Team.hasMany(Member);

// Profile associations
Profile.hasOne(Member);

// Training associations
Training.hasOne(Member);
Training.hasMany(Comment);
Training.hasOne(Category);

// Comment associations
Comment.belongsTo(Training);
Comment.belongsTo(Member);

export { Category, Comment, Member, Profile, Team, Training };


