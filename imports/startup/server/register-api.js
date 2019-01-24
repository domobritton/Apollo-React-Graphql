import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
// h
// this pattern is scalable and is good for adding many schemas
const testSchema = `
    type Query {
        hi: String
        resolutions: [Resolution]
    }
`;
// simple schema to define
const typeDefs = [testSchema, ResolutionsSchema];

// resolver to hit the api
const testResolvers = {
    Query: {
        hi() {
            return 'Hello Graphql';
        }
    }
};

const resolvers = merge(testResolvers, ResolutionsResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({
    schema
});
