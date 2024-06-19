const { gql } = require("apollo-server")

const typeDefs = gql`
    type User {
        id:ID!
        name: String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User!]
    }
    
    enum Nationality{
        AMERICA
        CHINA
    }
    
    type Query {
        users:[User!]!
    }
`
module.exports = {typeDefs}