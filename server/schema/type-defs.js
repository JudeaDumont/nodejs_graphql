const { gql } = require("apollo-server")

const typeDefs = gql`
    type User {
        id:ID!
        name: String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User!]
        favoriteMovies:[Movie]
    }
    
    type Movie {
        id:ID!
        name:String!
        year:Int!
    }
    
    enum Nationality{
        AMERICA
        CHINA
    }
    
    type Query {
        users:UsersResult
        user(id:ID!): User!
        movies:[Movie!]!
        movie(name: String!): Movie!
    }
    
    input CreateUserInput {
        name: String!
        username:String!
        age:Int = 18
        nationality:Nationality = AMERICA
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput):User!
        deleteUser(id: ID!): User
    }
    
    type UsersSuccess {
        users: [User!]!
    }
    
    type Error {
        message: String!
    }
    
    union UsersResult = UsersSuccess | Error

`
module.exports = {typeDefs}