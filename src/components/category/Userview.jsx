import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material'
// import Topebar from '../home/Topebar'
// import Sidebar from '../home/Sidebar'
import axios from 'axios'
import baseurl from '../../Api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TopebarWithSidebar from '../home/TopebarWithSidebar'

const Userview = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(baseurl + "/usignup/uview")
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deletevalues = (id) => {
        console.log("deleted", id);
        axios.put(baseurl + "/usignup/updatestatus/" + id)
            .then(() => {
                alert("DELETED");
                window.location.reload(false);
            });
    };

    return (
        <div>
            <TopebarWithSidebar />
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
                <Typography variant="h5" align="center" gutterBottom>
                    USER VIEW
                </Typography>
                <TableContainer style={{ width: '80%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">User Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">DOB</TableCell>
                                <TableCell align="center">Aadhar</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((value, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{value.username}</TableCell>
                                    <TableCell align="center">{value.email}</TableCell>
                                    <TableCell align="center">{value.dob}</TableCell>
                                    <TableCell align="center">{value.aadhar}</TableCell>
                                    <TableCell align="center">{value.status}</TableCell>
                                    <TableCell align="center">
                                        <DeleteForeverIcon color="error" onClick={() => deletevalues(value._id)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default Userview;
