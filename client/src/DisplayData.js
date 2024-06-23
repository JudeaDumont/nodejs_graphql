import React from "react";
import {useQuery} from "@apollo/client";
import {CreateUserDiv} from "./CreateUserDiv";
import {MovieSearchDiv} from "./MovieSearchDiv";
import AllMoviesBasicTable from "./AllMoviesBasicTable";
import AllUsersBasicTable from "./AllUsersBasicTable";
import {QUERY_ALL} from "./gql/UsersAndMoviesQuery";

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