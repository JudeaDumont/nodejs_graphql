import React from "react";

export function AllUsersDiv(allUsers) {
    return allUsers && allUsers.users.map((user) => {
        return (
            <div key={user.name + "-" + crypto.randomUUID()}>
                <h1>Name: {user.name}</h1>
                <h1>Username: {user.username}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Nationality: {user.nationality}</h1>
            </div>)
    });
}