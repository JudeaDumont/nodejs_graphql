const {ApolloServer} = require("apollo-server")
const {typeDefs} = require("./schema/type-defs");
const {resolvers} = require("./schema/resolvers");


const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        context:({req}) => {
            return {req}
        }
    })


server.listen().then(({url}) => {
    let currentTime = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    console.log(`Your API is Running at: ${url}! Better catch it! ` +
        `${currentTime
        }`);
})
