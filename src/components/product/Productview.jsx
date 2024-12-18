import React, { useEffect, useState } from 'react';
import baseurl from '../../Api';
import axios from 'axios';
// import Topebar from '../home/Topebar';
// import Sidebar from '../home/Sidebar';
import { Typography, Grid, Box, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Buffer } from 'buffer';
import Productedit from './Productedit';
import TopebarWithSidebar from '../home/TopebarWithSidebar';

const Productview = () => {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(baseurl + '/product/pview')
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletevalues = (id) => {
    console.log('deleted', id);
    axios.put(baseurl + '/product/updatestatus/' + id).then((response) => {
      alert('DELETED');
      window.location.reload(false);
    });
  };

  const updatevalues = (value) => {
    console.log('updated', value);
    setSelected(value);
    setUpdate(true);
  };

  let result = (
    <div>
      {/* <Topebar />
      <Sidebar /> */}
      <TopebarWithSidebar/>
      <div className="bb">
        <Typography variant="h4" align="center" gutterBottom>
          PRODUCT VIEW
        </Typography>
        <Grid container spacing={3}>
          {product.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: 2,
                  textAlign: 'center',
                }}
              >
                <img
                  src={`data:image/jpeg;base64,${Buffer.from(value.Pphoto.data).toString('base64')}`}
                  alt="Product"
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <Typography variant="h6" gutterBottom>
                  {value.Pname}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {value.Pdescr}
                </Typography>
                <Typography variant="body1">Price: ₹{value.Price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Category: {value.Cname}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Status: {value.Status}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button
                    startIcon={<ModeEditOutlineIcon />}
                    onClick={() => updatevalues(value)}
                    color="success"
                    variant="contained"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    startIcon={<DeleteForeverIcon />}
                    onClick={() => deletevalues(value._id)}
                    color="error"
                    variant="contained"
                    size="small"
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );

  if (update) {
    result = <Productedit data={selected} method="put" />;
  }

  return result;
};

export default Productview;
