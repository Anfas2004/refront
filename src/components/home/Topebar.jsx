import React from 'react'
import './topebar.css'

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
          <button><a href="/">Log out</a></button>
         
        </div>

      </div>
    </div>
  )
}

export default Topebar
