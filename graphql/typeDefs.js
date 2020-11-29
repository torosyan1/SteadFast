import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        getUser: getUser!
    }
    type createUserType{
        id: ID!,
        first_name: String!
        last_name:String!,
        email: String!,
        password: String!
    }
    
    type createUser{
        newUser: createUserType!
        token:String!,
    }
    type UserLoginType{
       id: ID!,
       email: String!,
       first_name: String!
       last_name:String!,
       token:String!,
    }
    
    type login{
       user: UserLoginType!,
       token: String, 
    }

    type getUser {
        id:ID!,
        first_name: String!, 
        last_name:String!,
        email:String!
    }
    
    type Mutation{
        createUser(first_name: String!, last_name:String!,email:String!, password:String!, ):createUser!
        login(email:String!,password: String!):login!
    }
`;
