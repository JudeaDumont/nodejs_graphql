just run using npm start

which sill start nodemon.

then you can go to:
https://studio.apollographql.com/sandbox/explorer

point to sandbox:
http://localhost:4000/

and run query:

query ExampleQuery {
    users {
    id
    name
    age
    nationality
    }
}

# TroubleShooting:

"Cannot return null from non-nullable field Query.*"
is potentially a misconfiguration. 
for instance, the resolvers file was never specified to
the ApolloServer instance.
