import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {CREATE_USER_MUTATION} from "./gql/CreateUserMutation";

export function CreateUserDiv(refetchUsers) {

    const [createUser] = useMutation(CREATE_USER_MUTATION)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(0)
    const [nationality, setNationality] = useState("")
    return <div>
        <h1>Create User</h1>
        <input type="text" placeholder="Name..." onChange={
            (event) => {
                setName(event.target.value)
            }}></input>
        <input type="text" placeholder="Username..." onChange={
            (event) => {
                setUsername(event.target.value)
            }}></input>
        <input type="number" placeholder="Age..." onChange={
            (event) => {
                setAge(Number(event.target.value))
            }}></input>
        <input type="text" placeholder="Nationality..." onChange={
            (event) => {
                setNationality(event.target.value)
            }}></input>
        <button onClick={() => {
            createUser({variables: {createUserInput: {name, username, age, nationality}}})
            refetchUsers();
        }}>Create User
        </button>
    </div>;
}