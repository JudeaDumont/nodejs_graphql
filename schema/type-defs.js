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
        users:[User!]!
        user(id:ID!): User!
        movies:[Movie!]!
        movie(name: String!): Movie!
    }
`
module.exports = {typeDefs}