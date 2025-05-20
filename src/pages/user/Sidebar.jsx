import React, { useState } from 'react';
import { FaBars, FaHome, FaHotel, FaMapMarkedAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <ul className="sidebar-menu">
        <li><FaHome /><Link to='/user/dashboard/'>Dashboard</Link></li>
        <li><FaHotel /><Link to='/user/dashboard/exploreplace'>Explore Place</Link></li>
        <li><FaMapMarkedAlt /><Link to='/user/dashboard/hotellist'>Hotel Listings</Link></li>
        <li><FaUser /><Link to='/user/dashboard/myboking'>My Bookings</Link></li>
        <li><FaSignOutAlt /><Link to='/user/dashboard/usergallery'> Media Gallery</Link></li>
        <li><FaSignOutAlt /><Link to='/user/dashboard/feed'>Feedback & Complaints</Link></li>
        <li><FaSignOutAlt /><Link to='/'>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
