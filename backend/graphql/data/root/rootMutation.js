import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import { GraphQLUpload } from 'apollo-upload-server';

export const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    submitTraining: {
      type: GraphQLBoolean,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        category: {
          type: new GraphQLNonNull(GraphQLString)
        },
        imageFile: {
          type: GraphQLUpload
        }
      },
      resolve(source, args, context) {
        console.log('source', source);
        console.log('args', args);
        console.log('context', context);

        return true;
      }
    }
  }
});
