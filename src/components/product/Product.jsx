import React, { useEffect, useState } from 'react';
// import Topebar from '../home/Topebar';
// import Sidebar from '../home/Sidebar';
import {
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
} from '@mui/material';
import baseurl from '../../Api';
import axios from 'axios';
import './product.css';
import TopebarWithSidebar from '../home/TopebarWithSidebar';

const Product = () => {
  const [inputs, setInputs] = useState({ Pname: '', Pdescr: '', Price: '', Cname: '', Status: 'ACTIVE' });
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState([]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(baseurl + '/product/caview')
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    inputs.Pphoto = file;
  };

  const saveData = () => {
    const formData = new FormData();
    formData.append('Pname', inputs.Pname);
    formData.append('Pdescr', inputs.Pdescr);
    formData.append('Price', inputs.Price);
    formData.append('Cname', inputs.Cname);
    formData.append('Status', inputs.Status);
    formData.append('Pphoto', inputs.Pphoto);

    fetch(baseurl + '/Product/pnew', {
      method: 'post',
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        alert('Record saved');
      })
      .catch(() => {
        console.log('Error');
      });
  };

  return (
    <div>
      {/* <Topebar />
      <Sidebar /> */}
      <TopebarWithSidebar/>
      <Box sx={{ padding: 3, maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add a Product
        </Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Product Name:</Typography>
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="Pname"
                  value={inputs.Pname}
                  onChange={inputHandler}
                  placeholder="Enter product name"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Description:</Typography>
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  name="Pdescr"
                  value={inputs.Pdescr}
                  onChange={inputHandler}
                  placeholder="Enter product description"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Price:</Typography>
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="Price"
                  value={inputs.Price}
                  onChange={inputHandler}
                  placeholder="Enter price"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Category:</Typography>
              </TableCell>
              <TableCell>
                <select
                  name="Cname"
                  value={inputs.Cname}
                  onChange={inputHandler}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                >
                  {category.map((value, index) => (
                    <option key={index} value={value.Cname}>
                      {value.Cname}
                    </option>
                  ))}
                </select>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>
                <Typography variant="body1">Upload Photo:</Typography>
              </TableCell>
              <TableCell>
                <input type="file" onChange={handleImage} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Status:</Typography>
              </TableCell>
              <TableCell>
                <select
                  name="Status"
                  value={inputs.Status}
                  onChange={inputHandler}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={saveData}
                  sx={{ padding: '10px 20px', marginTop: 2 }}
                >
                  Submit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default Product;
