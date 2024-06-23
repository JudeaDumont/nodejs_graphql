import {gql, useLazyQuery} from "@apollo/client";
import React, {useState} from "react";

const QUERY_MOVIE_BY_NAME = gql`
    query MovieQuery($movieName:String!){
        movie(name:$movieName){
            name
            year
        }
    }
`
export function MovieSearchDiv() {
    const [fetchMovie, {data: movieSearchedData, error: movieError}] =
        useLazyQuery(QUERY_MOVIE_BY_NAME)

    const [movieSearched, setMovieSearched] = useState("")
    return <div>
        <input type="text" placeholder="search..."
               onChange={(event) => {
                   setMovieSearched(event.target.value)
               }}/>
        <button onClick={() => {
            fetchMovie({
                variables: {
                    movieName: movieSearched
                }
            })
        }}>
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
    </div>;
}