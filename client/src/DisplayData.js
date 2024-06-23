import React from "react";
import {gql, useQuery} from "@apollo/client";
import {CreateUserDiv} from "./CreateUserDiv";
import {MovieSearchDiv} from "./MovieSearchDiv";
import AllMoviesBasicTable from "./AllMoviesBasicTable";
import AllUsersBasicTable from "./AllUsersBasicTable";

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
function DisplayData() {
    const {data: allUsers, loading, refetch: refetchUsers} = useQuery(QUERY_ALL_USERS)

    if (allUsers) {
        console.log(allUsers)
    }
    return <div>
        {CreateUserDiv(refetchUsers)}
        {AllUsersBasicTable(allUsers, refetchUsers)}
        {AllMoviesBasicTable()}
        {MovieSearchDiv()}
    </div>
}

export default DisplayData