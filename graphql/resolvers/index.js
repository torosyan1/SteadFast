import { resolver } from './user';

export const resolvers = {
    Query: {
        ...resolver.Query,
    },
    Mutation: {
        ...resolver.Mutation,
    },

};
