import {gql} from "@apollo/client";

export const QUERY_ALL = gql`
    fragment UserInfo on User {
        name
        username
        age
        nationality
    }
    query AllQuery {
        users {
            ...UserInfo
            friends {
                name
                age
            }
            favoriteMovies {
                name
                year
            }
        }
        movies {
            id
            name
            year
        }
    }
`