import { GraphQLNonNull } from 'graphql';
import { TrainingType } from './trainingType';
import TrainingOperations from './trainingOperations';

const trainingOperations = new TrainingOperations();

export const TrainingMutation = {
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
