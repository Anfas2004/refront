import React from 'react'
import './topebar.css'
import { Button } from '@mui/material'

const Topebar = () => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">
            RETRADE
          </span>
        </div>

        <div className='topright'>

          {/* <button onClick={'/'}>Log Out</button> */}
          <Button
            variant="contained"
            color="error"
            href="/admin"
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

      </div>
    </div>
  )
}

export default Topebar
