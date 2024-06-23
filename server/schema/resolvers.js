const {UserList, MovieList} = require("../FakeData")
const _ = require("lodash")

const resolvers = {
    Query: {
        users: (parent, args, context, info) => {
            console.log( "context.req.headers:\n" + JSON.stringify(context.req.headers))
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name: name});
            return movie;
        },
    },
    //this is saying "every users favorite movies are from between 2000 and 2010
    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList,
                (movie) =>
                    movie.year >= 2000 && movie.year <= 2010
            )
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            user.id = UserList[UserList.length - 1].id + 1
            UserList.push(user)
            console.log(user)
            return user
        },
        updateUsername: (parent, args) => {
            const user = _.find(UserList, {id: Number(args.input.id)});
            user.username = args.input.newUsername
            console.log(user)
            return user
        },
        deleteUser: (parent, args) => {
            const user = _.find(UserList, {id: Number(args.id)});
            _.remove(UserList, (user)=> user.id === Number(args.id))
            return user;
        }
    }
}

module.exports = {resolvers}