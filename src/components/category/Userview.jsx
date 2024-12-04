import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import Topebar from '../home/Topebar'
import Sidebar from '../home/Sidebar'
import axios from 'axios'
import baseurl from '../../Api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Userview = () => {

    var [user, setUser] = useState([]);
    // var [selected, setSelected] = useState();


    useEffect(() => {
        axios.get(baseurl + "/usignup/uview")
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletevalues = (id) => {
        console.log("deleted", id)
        axios.put(baseurl + "/usignup/updatestatus/" + id)
            .then((response) => {
                alert("DELETED")
                window.location.reload(false);
            })
    }





    return (
        <div>
            <Topebar />
            <Sidebar />
            <div className='bb'>

                <Typography >USER VIEW</Typography><br /><br />
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>

                                <TableCell >User Name</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell>DOB</TableCell>
                                <TableCell>Aadhar</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((value, index) => {
                                return (
                                    <TableRow key={index}>

                                        <TableCell>{value.username}</TableCell>
                                        <TableCell>{value.email}</TableCell>
                                        <TableCell>{value.dob}</TableCell>
                                        <TableCell>{value.aadhar}</TableCell>
                                        <TableCell>{value.status}</TableCell>

                                        <TableCell><DeleteForeverIcon color='error' onClick={() => deletevalues(value._id)} /></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Userview
