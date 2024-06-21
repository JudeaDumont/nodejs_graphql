import React from "react";
import {gql, useQuery} from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query AllUsersQuery {
        users {
            id
            name
            username
            age
            nationality
            friends{
                name
                age
            }
        }
    }
`

function DisplayData() {
    const {data} = useQuery(QUERY_ALL_USERS)
    if (data) {
        console.log(data)
    }
    return <div>
        {
            data && data.users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h1>Username: {user.username}</h1>
                        <h1>Age: {user.age}</h1>
                        <h1>Nationality: {user.nationality}</h1>
                    </div>)
            })
        }
    </div>
}

export default DisplayData