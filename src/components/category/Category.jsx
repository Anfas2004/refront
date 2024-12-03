import React, { useState } from 'react'
import Topebar from '../home/Topebar'
import Sidebar from '../home/Sidebar'
import { Button, TextField, Typography } from '@mui/material'
import './category.css'
import axios from 'axios'
import baseurl from '../../Api';

const Category = () => {
    var [inputs, setInputs] = useState({ "Cname": '', "Status": 'ACTIVE' })

    const inputhandler = (event) => {
        const { name, value } = event.target
        setInputs((inputs) => ({ ...inputs, [name]: value }))
        console.log(inputs)
    }

    const savedata = () => {
        console.log(inputs)
        axios.post(baseurl + "/category/cnew", inputs)
            .then((response) => { alert("Record Saved") })
            .catch(err => console.log(err))

        //   navigate('/studentview')
    }



    return (
        <div>
            <Topebar />
            <Sidebar />
            <div className='aa'>
            <h1 align="center">ADD A CATEGORY</h1>
           
            <TextField label="Category name" variant="filled" name="Cname" value={inputs.Cname} onChange={inputhandler} /><br /><br />
            
            Status: &nbsp;&nbsp;
            <select name="Status" value={inputs.Status} onChange={inputhandler}>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
            </select>
            <br /><br />
            <Button onClick={savedata}>SUBMIT</Button>
            </div>
        </div>

    )
}

export default Category
