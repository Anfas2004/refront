import { AppBar,  Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './appbar.css'


const Appbar = () => {
    return (
        <div className='appbar-style'>
            {/* <AppBar>
                <Toolbar>
                    <Typography>LOGO</Typography>
                    <Button variant='outlined'  color="warning">
                        Hello
                    </Button>
                </Toolbar>
            </AppBar> */}
            <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button >login</button>
      </nav>
        </div>
    )
}

export default Appbar
