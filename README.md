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

# Information:
- In resolvers the users query takes four 
arguments that it does not need
with the intention of exposition
and will often be part of the problem-solving solution
- `context.req.headers` 
can be used to check authorization headers
- `info` can be used to check schema design etc.

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

# Cannot query data then split it into two components:
`AllUsersBasicTable.js:21 Warning: React has detected a 
change in the order of Hooks called by DisplayData. 
This will lead to bugs and errors if not fixed. 
For more information, read the Rules of Hooks: 
https://reactjs.org/link/rules-of-hooks`

also it will throw:

`Should have a queue. This is likely a bug in React. Please file an issue.
at updateReducer`

you can subvert this by passing the whole 
query into each component:

`UserDiv(all); MovieDiv(all)` 

rather than

`UserDiv(all.users); MovieDiv(all.movies)`

