import React, { useState } from 'react'
import Topebar from '../home/Topebar'
import Sidebar from '../home/Sidebar'
import { Button, TextField, Typography } from '@mui/material'
import './category.css'
import axios from 'axios'
import baseurl from '../../Api';

const Categoryedit = (props) => {
    var [inputs, setInputs] = useState(props.data)

    const inputhandler = (event) => {
        const { name, value } = event.target
        setInputs((inputs) => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }

    const savedata = () => {

        if (props.method === 'put') {

            axios.put(baseurl + "/category/cedit/" + inputs._id, inputs)
                .then((response) => {
                    alert("Updated")
                    window.location.reload(false)
                })
                .catch(err => console.log(err))
        }
    }



    return (
        <div className='aa'>
            <Topebar />
            <Sidebar />
            <h1 align="center">EDIT THE CATEGORY</h1>
            
            <TextField label="Category name" variant="filled" name="Cname" value={inputs.Cname} onChange={inputhandler} /><br /><br />

            Status: &nbsp;&nbsp;
            <select name="Status" value={inputs.Status} onChange={inputhandler}>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
            </select>
            <br /><br />
            <Button onClick={savedata}>SUBMIT</Button>
        </div>

    )
}

export default Categoryedit
