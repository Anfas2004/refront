import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="/home" className="sidebar-link">Home</a>
          </li>
        </ul>
        <h3 className="sidebar-section-title">Registrations</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="/category" className="sidebar-link">Category</a>
          </li>
          <li className="sidebar-item">
            <a href="/product" className="sidebar-link">Product</a>
          </li>
        </ul>
        <h3 className="sidebar-section-title">View</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="/cview" className="sidebar-link">Category View</a>
          </li>
          <li className="sidebar-item">
            <a href="/pview" className="sidebar-link">Product View</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
