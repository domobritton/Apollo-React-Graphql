import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

// simple schema to define
const typeDefs = `
    type Query {
       hi: String 
    }
`;

// resolver to hit the api
const resolvers = {
    Query: {
        hi() {
            return 'Hello Graphql'
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
