import {gql} from "@apollo/client";

export const QUERY_ALL = gql`
    query AllQuery {
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
        movies {
            id
            name
            year
        }
    }
`