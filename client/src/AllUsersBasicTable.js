import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DeleteButton} from "./DeleteButton";
import {useMutation} from "@apollo/client";
import {DELETE_USER_MUTATION} from "./gql/DeleteUserMutation";

export default function AllUsersBasicTable(all, refetchUsers) {
    let [deleteUser] = useMutation(DELETE_USER_MUTATION);

    return (
        all && all.users &&
        <>
            <h1>List of Users</h1>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Nationality</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {all.users.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.nationality}</TableCell>
                                <TableCell>
                                    {DeleteButton(deleteUser, row.id, refetchUsers)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}