import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';
// hlffe
// this pattern is scalable and is good for adding many schemas
// const testSchema = `
//     type Query {
//         hi: String
//         resolutions: [Resolution]
//     }
// `;
// simple schema to define
const typeDefs = [
    ResolutionsSchema,
    UsersSchema
];

// resolver to hit the api
// const testResolvers = {
//     Query: {
//         hi() {
//             return 'Hello Graphql';
//         }
//     }
// };

const resolvers = merge(ResolutionsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
