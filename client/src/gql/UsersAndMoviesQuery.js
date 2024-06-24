import {gql} from "@apollo/client";

export const QUERY_ALL = gql`
    fragment UserInfo on User {
        id
        name
        username
        age
        nationality
    }
    query AllQuery {
        users{
            ...on UsersSuccess {
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
            }
            ...on Error {
                message
            }
        }
        movies {
            id
            name
            year
        }
    }
`