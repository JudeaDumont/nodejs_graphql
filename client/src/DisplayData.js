import React, {useState} from "react";
import {gql, useLazyQuery, useQuery} from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query AllUsersQuery {
        users {
            id
            name
            username
            age
            nationality
            friends {
                name
                age
            }
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query AllMoviesQuery{
        movies{
            id
            name
            year
        }
    }
`

const QUERY_MOVIE_BY_NAME = gql`
    query MovieQuery($movieName:String!){
        movie(name:$movieName){
            name
            year
        }
    }
`

function mapToH1UserText(allUsers) {
    return allUsers && allUsers.users.map((user) => {
        return (
            <div key={user.name + "-" + crypto.randomUUID()}>
                <h1>Name: {user.name}</h1>
                <h1>Username: {user.username}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Nationality: {user.nationality}</h1>
            </div>)
    });
}

function mapToH1MovieText(allMovies) {
    return allMovies && allMovies.movies.map((movie) => {
        return (
            <div key={movie.name + "-" + crypto.randomUUID()}>
                <h1>Name: {movie.name}</h1>
                <h1>Year: {movie.year}</h1>
            </div>)
    });
}

function DisplayData() {
    const allUsers = useQuery(QUERY_ALL_USERS).data
    const allMovies = useQuery(QUERY_ALL_MOVIES).data
    const [fetchMovie, {data: movieSearchedData, error: movieError}] =
        useLazyQuery(QUERY_MOVIE_BY_NAME)

    const [movieSearched, setMovieSearched] = useState("")
    if (allUsers) {
        console.log(allUsers)
    }
    return <div>
        {mapToH1UserText(allUsers)}
        {mapToH1MovieText(allMovies)}
        {
            <div>
                <input type="text" placeholder="search..."
                       onChange={(event) => {
                           setMovieSearched(event.target.value)
                       }}/>
                <button onClick={() => {
                    fetchMovie({
                        variables: {
                            movieName: movieSearched
                        }
                    })}}>
                    Search
                </button>
                <div>
                    {
                        movieSearchedData && (
                            <div>
                                <h1>Movie Name: {movieSearchedData.movie.name}</h1>
                                <h1>
                                    Year: {movieSearchedData.movie.year}
                                </h1>{" "}
                            </div>
                        )
                    }
                    {
                        movieError && <h1>
                            There was an error fetching a movie by name
                        </h1>
                    }
                </div>
            </div>
        }
    </div>
}

export default DisplayData