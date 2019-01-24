import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

// this pattern is scalable and is good for adding many schemas
const testSchema = `
    type Query {
        hi: String
        resolutions: [Resolution]
    }
`;
// simple schema to define
const typeDefs = [
    testSchema,
    ResolutionsSchema
];

// resolver to hit the api
const resolvers = {
    Query: {
        hi() {
            return 'Hello Graphql';
        },
        resolutions() {
            return [
                {
                    _id: 'asdfsd',
                    name: 'Get stuff done!'
                },
                {
                    _id: 'fffffff',
                    name: 'Lose some weight!'
                }
            ];
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({
    schema
});