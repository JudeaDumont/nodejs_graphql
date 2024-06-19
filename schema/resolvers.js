const {UserList, MovieList} = require("../FakeData")
const _ = require("lodash")

const resolvers = {
    Query: {
        users: () => {
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
    }
}

module.exports = {resolvers}