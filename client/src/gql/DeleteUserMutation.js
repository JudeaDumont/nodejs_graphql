import {gql} from "@apollo/client";

export const DELETE_USER_MUTATION = gql`
    mutation DeleteUser ($deleteUserId:ID!){
        deleteUser(id: $deleteUserId) {
            id
        }
    }
`