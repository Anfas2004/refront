import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, CircularProgress } from '@mui/material';
import baseurl from '../../Api';

const Updetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseurl}/product/${id}`) // Fetch product details
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        {product.Pname}
      </Typography>
      <img
        src={`data:image/jpeg;base64,${Buffer.from(product.Pphoto.data).toString('base64')}`}
        alt="Product"
        style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '8px', marginBottom: '16px' }}
      />
      <Typography variant="h6" gutterBottom>
        Price: ₹{product.Price}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.Pdescr}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Category: {product.Cname}
      </Typography>
    </Box>
  );
};

export default Updetails;
