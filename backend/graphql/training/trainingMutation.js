const { GraphQLNonNull } = require('graphql');
const { TrainingType } = require('./trainingType');
const { TrainingOperations } = require('./trainingOperations');

const trainingOperations = new TrainingOperations();

module.exports.TrainingMutation = {
  trainingUpdate: {
    type: TrainingType,
    args: {
      input: {
        type: new GraphQLNonNull(TrainingType),
      },
    },
    resolve: (source, args, context) => {
      return trainingOperations.trainingUpdate(args.input, context);
    },
  },
};
