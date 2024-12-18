import React from 'react'
//import Topebar from './Topebar'
//import Sidebar from './Sidebar'
import {Typography, Container, Grid, Box, Paper} from "@mui/material";
import TopebarWithSidebar from './TopebarWithSidebar';

const Home = () => {
  return (
    <div>
      <TopebarWithSidebar/>
      {/* <Topebar/>
      <Sidebar/> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            RETRADE
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ marginTop: 2 }}>
            A Complete Website for Buying and Selling your Goods and Things
          </Typography>
          {/* <Button href="/uproduct" variant="contained" color="secondary" sx={{ marginTop: 3, mr: 2 }}>
            buy
          </Button>
          <Button href="/product" variant="contained" color="secondary" sx={{ marginTop: 3 }}>
            sell
          </Button> */}
        </Container>
      </Box>


      {/* Features Section */}
      <Container sx={{ my: 5 }}>
        {/* <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography> */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Feature 1
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Descriptive text about the first feature. Why it's amazing and how it helps users.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Feature 2
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Descriptive text about the second feature. Benefits and value to the user.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Feature 3
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Descriptive text about the third feature. Why this feature stands out.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ py: 3, backgroundColor: 'background.default', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 Retrade. All rights reserved.
        </Typography>
      </Box>
    </div>
  )
}

export default Home
