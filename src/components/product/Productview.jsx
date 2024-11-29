import React, { useEffect, useState } from 'react'
import baseurl from '../../Api';
import axios from 'axios';
import Topebar from '../home/Topebar';
import Sidebar from '../home/Sidebar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Buffer } from 'buffer';
import Productedit from './Productedit';

const Productview = () => {

    var [product, setProduct] = useState([]);
    var [selected, setSelected] = useState();
    var [update, setUpdate] = useState(false);


    useEffect(() => {
        axios.get(baseurl + "/product/pview")
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletevalues = (id) => {
        console.log("deleted", id)
        axios.put(baseurl + "/product/updatestatus/" + id)
            .then((response) => {
                alert("DELETED")
                window.location.reload(false);
            })
    }

    const updatevalues = (value) => {
        console.log("updated", value);
        setSelected(value);
        setUpdate(true);
    }



    var result =
        <div>
            <Topebar />
            <Sidebar />
            <div className='bb'>

                <Typography >PRODUCT VIEW</Typography><br /><br />
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                {/* <TableCell >Product id</TableCell> */}
                                <TableCell >Product ID</TableCell>
                                <TableCell >Product Name</TableCell>
                                <TableCell >Description</TableCell>
                                <TableCell >Price</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>photo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {product.map((value, index) => {
                                return (
                                    <TableRow key={index}>
                                        { <TableCell>{value._id}</TableCell> }
                                        <TableCell>{value.Pname}</TableCell>
                                        <TableCell>{value.Pdescr}</TableCell>
                                        <TableCell>{value.Price}</TableCell>
                                        <TableCell>{value.Cname}</TableCell>
                                        <TableCell>{value.Status}</TableCell>

                                        <TableCell><img
                                            src={`data:image/jpeg;base64,${Buffer.from(value.Pphoto.data).toString('base64')}`} width="50" height="50" alt="Error" />
                                        </TableCell>
                                        {/* <TableCell>
                                            <img src={`data:${value.Pphoto.contentType};base64,${value.Pphoto.data}`}
                                                width="50" height="50" alt="Error" />
                                        </TableCell> */}
                                        <TableCell><ModeEditOutlineIcon color='success' onClick={() => updatevalues(value)} /></TableCell>
                                        <TableCell><DeleteForeverIcon color='error' onClick={() => deletevalues(value._id)} /></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    if (update) {
        result = <Productedit data={selected} method='put' />
    }
    return (result)
}

export default Productview
