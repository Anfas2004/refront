import React, { useEffect, useState } from 'react';
import baseurl from '../../Api';
import axios from 'axios';


import { Typography, Grid, Box, Button, AppBar, Toolbar } from '@mui/material';

import { Buffer } from 'buffer';

const Upview = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(baseurl + '/product/pview')
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RETRADE
          </Typography>

          <div className='topright'>
            <Button
              variant="contained"
              color="secondary"
              href="/"
              sx={{
                textTransform: 'none',
                padding: '5px 20px',
                fontSize: '16px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Log Out
            </Button>
          </div>

        </Toolbar>
      </AppBar>


      <Typography variant="h4" align="center" gutterBottom>
        PRODUCT VIEW
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f9f9f9' }}>
        <div style={{ width: '80%', maxWidth: '1200px', textAlign: 'center' }}>
          <Grid container spacing={3} justifyContent="center">
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
                  <Box sx={{ marginTop: 2 }}>
                    <Button color="error" variant="contained" size="small">
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Upview;
