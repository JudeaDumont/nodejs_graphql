import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {gql, useQuery} from "@apollo/client";

//this is case-sensitive
const QUERY_ALL_MOVIES = gql`
    query AllMoviesQuery{
        movies{
            id
            name
            year
        }
    }
`
export default function AllMoviesBasicTable() {

    const allMovies = useQuery(QUERY_ALL_MOVIES).data

    return (
        allMovies &&
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="Movies">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allMovies.movies.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell>{row.year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}