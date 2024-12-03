import React, { useEffect, useState } from 'react'
import Topebar from '../home/Topebar'
import Sidebar from '../home/Sidebar'
import { Button, TextField } from '@mui/material'
import './product.css'
import baseurl from '../../Api'
import axios from 'axios'

const Product = () => {

  var [inputs, setInputs] = useState({ "Pname": '',  "Pdescr": '',"Price": '', "Cname": '', "Status": 'ACTIVE' })
  var [selectedimage, setSelectedimage] = useState(null);
  var [category, setCategory] = useState([]);
  


  const inputhandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  useEffect(() => {
    axios.get(baseurl + "/category/cview")
        .then(response => {
            console.log(response.data)
            setCategory(response.data)
        })
        .catch(err => console.log(err))
}, [])

  const handleimage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.Pphoto = file;
  }

  const savedata = () => {
    const formdata = new FormData();
    formdata.append('Pname', inputs.Pname);
    formdata.append('Pdescr', inputs.Pdescr);
    formdata.append('Price', inputs.Price);
    formdata.append('Cname', inputs.Cname);
    formdata.append('Status', inputs.Status);
    formdata.append('Pphoto', inputs.Pphoto);


    fetch(baseurl + '/Product/pnew',
      { method: 'post', body: formdata, })
      .then((response) => response.json())
      .then((data) => {
        alert("record saved")
      })
      .catch((err) => {
        console.log("error")
      })
    // navigate('/certificateview')
  }


  return (
    <div>
      <Topebar />
      <Sidebar />
      <div className='container'>
      <h1 align="center">ADD A PRODUCT</h1>
      <form>
        
        <TextField id="outlined-basic" label="Product name" variant="outlined" value={inputs.Pname} name='Pname' onChange={inputhandler} /><br /><br />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          name='Pdescr'
          onChange={inputhandler}
        /><br /><br />
        
        <TextField id="outlined-basic" label="Price" variant="outlined" value={inputs.Price} name='Price' onChange={inputhandler} /><br /><br />
        Category:  &nbsp;&nbsp;
        <select name="Cname" value={inputs.Cname} onChange={inputhandler}  >
          {
            category.map((value, index) => {
              return (
                <option key={index} value={value.Cname}>{value.Cname}</option>
              )


            })
          }
        </select><br /><br />

        Status: &nbsp;&nbsp;
        <select name="Status">
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select><br /><br />


        To add photo <input type='file' onChange={handleimage}/>
        
        <Button onClick={savedata}>SUBMIT</Button>
      </form>
      </div>
    </div>
  )
}

export default Product
