import React from "react";
import {gql, useQuery} from "@apollo/client";
import {CreateUserDiv} from "./CreateUserDiv";
import {MovieSearchDiv} from "./MovieSearchDiv";
import AllMoviesBasicTable from "./AllMoviesBasicTable";
import AllUsersBasicTable from "./AllUsersBasicTable";

const QUERY_ALL = gql`
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

function DisplayData() {
    const {data: all, loadingAll, refetch: refetchAll} = useQuery(QUERY_ALL)

    if (all) {
        console.log(all)
    }
    return <div>
        {CreateUserDiv(refetchAll)}
        {AllUsersBasicTable(all, refetchAll)}
        {AllMoviesBasicTable(all)}
        {MovieSearchDiv()}
    </div>
}

export default DisplayData