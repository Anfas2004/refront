import React, { useState } from 'react';
// import Topebar from '../home/Topebar';
// import Sidebar from '../home/Sidebar';
import { Button, TextField, Typography, Table, TableBody, TableCell, TableRow, Box } from '@mui/material';
import './category.css';
import axios from 'axios';
import baseurl from '../../Api';
import TopebarWithSidebar from '../home/TopebarWithSidebar';

const Category = () => {
  const [inputs, setInputs] = useState({ Cname: '', Status: 'ACTIVE' });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const saveData = () => {
    axios
      .post(baseurl + '/category/cnew', inputs)
      .then(() => alert('Record Saved'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* <Topebar />
      <Sidebar /> */}
      <TopebarWithSidebar/>
      <Box sx={{ padding: 3, maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add a Category
        </Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Category Name:</Typography>
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="Cname"
                  value={inputs.Cname}
                  onChange={inputHandler}
                  placeholder="Enter category name"
                />
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

export default Category;
