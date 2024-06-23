import React from "react";
import {gql, useQuery} from "@apollo/client";

//this is case-sensitive
const QUERY_ALL_MOVIES = gql`
    query AllMoviesQuery{
        movies{
            id
            name
            year
        }
    }
`

export function AllMoviesDiv() {
    const allMovies = useQuery(QUERY_ALL_MOVIES).data
    return allMovies && allMovies.movies.map((movie) => {
        return (
            <div key={movie.name + "-" + crypto.randomUUID()}>
                <h1>Name: {movie.name}</h1>
                <h1>Year: {movie.year}</h1>
            </div>)
    });
}