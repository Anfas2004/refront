import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, CircularProgress } from '@mui/material';
import baseurl from '../../Api';
import { Buffer } from 'buffer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseurl}/product/pdetails/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(setProduct)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography variant="h5" align="center" mt={5}>
        Product not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <img
        src={`data:image/jpeg;base64,${Buffer.from(product.Pphoto.data).toString('base64')}`}
        alt={product.Pname}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
      />
      <Typography variant="h4" gutterBottom>
        {product.Pname}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.Pdescr}
      </Typography>
      <Typography variant="h6">Price: ₹{product.Price}</Typography>
      <Typography variant="body2" color="textSecondary">
        Category: {product.Cname}
      </Typography>
    </Box>
  );
};

export default ProductDetails;
