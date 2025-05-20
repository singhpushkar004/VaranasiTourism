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
        <li><FaHome /><Link to='/admin/dashboard/'>Dashboard</Link></li>
        <li><FaHotel /><Link to='/admin/dashboard/usermgmt'>User Mgmt.</Link></li>
        <li><FaMapMarkedAlt /><Link to='/admin/dashboard/toutrismgmt'>Tourist Places Mgmt.</Link></li>
        <li><FaUser /><Link to='/admin/dashboard/hotelmgmt'>Hotel & Rest. Listings</Link></li>
        <li><FaSignOutAlt /><Link to='/admin/dashboard/bookingmgmt'>Booking Mgtm.</Link></li>
        <li><FaSignOutAlt /><Link to='/admin/dashboard/gallerymgmt'> Media Gallery</Link></li>
        <li><FaSignOutAlt /><Link to='/admin/dashboard/feed&comp'>Feedback & Complaints</Link></li>
        <li><FaSignOutAlt /><Link to=''>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
