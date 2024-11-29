import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
    <a href='/home'><li>HOME</li></a>
   </ul>
    Registrations
   <ul>
    <a href='/category'><li>Category</li></a>
    <a href='/product'><li>Product</li></a>
    {/* <a href='/pet'><li></li></a> */}
   </ul>
   View
   <ul>
   <a href="/cview"><li>Category View</li></a>
   <a href="/pview"><li>Product View</li></a>
  
  </ul>
  
</div>
  )
}

export default Sidebar
