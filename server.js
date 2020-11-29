import './env';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { DB } from './db/index';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers/index';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app });

DB();

app.listen({ port: process.env.PORT }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
