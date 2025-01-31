import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './categoryview.css'
// import Topebar from '../home/Topebar'
// import Sidebar from '../home/Sidebar'
import axios from 'axios'
import baseurl from '../../Api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Categoryedit from './Categoryedit'
import TopebarWithSidebar from '../home/TopebarWithSidebar';

const Categoryview = () => {
    var [category, setCategory] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(() => {
        axios.get(baseurl + "/category/cview")
            .then(response => {
                console.log(response.data)
                setCategory(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletevalues =(id)=>{
        console.log("deleted",id)
        axios.put(baseurl+"/category/updatestatus/"+id)
        .then((response)=>{
            alert("DELETED")
        window.location.reload(false);
        })
    }
    
    const updatevalues =(value)=>{
        console.log("updated",value);
        setSelected(value);
        setUpdate(true);
        }

        
var result = 
<div>
            {/* <Topebar />
            <Sidebar /> */}
            <TopebarWithSidebar/>
            <div className='bb'>

                <Typography >CATEGORY VIEW</Typography><br /><br />
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                {/* <TableCell >Category id</TableCell> */}
                                <TableCell >Category Name</TableCell>
                                <TableCell >Status</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category.map((value, index) => {
                                return (
                                    <TableRow key={index}>
                                        {/* <TableCell>{value.Cid}</TableCell> */}
                                        <TableCell>{value.Cname}</TableCell>
                                       
                                        <TableCell>{value.Status}</TableCell>
                                        <TableCell><ModeEditOutlineIcon color='success' onClick={() => updatevalues(value)} /></TableCell>
                                        <TableCell><DeleteForeverIcon color='error' onClick={() => deletevalues(value._id)}/></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

if(update)
    {
      result=<Categoryedit data={selected} method='put'/>
    }
return (result)

}

export default Categoryview



