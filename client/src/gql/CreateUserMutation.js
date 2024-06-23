import {gql} from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($createUserInput:CreateUserInput!){
        createUser(input: $createUserInput){
            id
            name
            username
            age
            nationality
        }
    }
`