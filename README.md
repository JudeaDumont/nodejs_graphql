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
The hint being that it is the top level name of the query that was null, 
as opposed to a lower level field.

# Errors and Observations

- if a field is required and you set it to null in the database
graphql will throw errors

- if you put into data a value for a field 
that graphql uses an enum for you will get
Enum "Enum Name" cannot represent value: "whatever you put in there"

- this seems really fragile to me because that means if your database diverges in anyway, your queries won't work anymore.

# Must reuse useQuery and useMutation objects
`Cannot read properties of undefined (reading 'length')
TypeError: Cannot read properties of undefined (reading 'length')
at areHookInputsEqual`

The above error will occur if you call useMutation or useQuery 
multiple times with the same query. This suggests that, 
if you need a delete button for every row in a table, per-say, 
that the delete mutation will need to be passed into the component
that creates that table. Each button will reuse it.