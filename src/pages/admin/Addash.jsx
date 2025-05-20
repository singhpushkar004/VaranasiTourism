import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router';


const Addash = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isCollapsed={collapsed} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-content p-4">{children}
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Addash;
