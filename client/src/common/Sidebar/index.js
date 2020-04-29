import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function Sidebar() {

  return (
      <div>
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        
        <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-virus" />
                </div>
                <div className="sidebar-brand-text mx-3">COVID-19 App</div>
        </Link>
        
        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <Item   className = {"active"}
                href = {"/"} 
                icon = {<i className="fas fa-fw fa-tachometer-alt" />}
                text = {<span>Dashboard</span>}/>

        {/* Nav Item - Charts */}
        <Item   active = {''}
                href = {"/"} 
                icon = {<i className="fas fa-fw fa-chart-area" />}
                text = {<span>Charts</span>}/>

        {/* Nav Item - Tables */}
        <Item   active = {''}
                href = {"/"} 
                icon = {<i className="fas fa-fw fa-table" />}
                text = {<span>Tables</span>}/>

        {/* Nav Item - Tables */}
        <Item   active = {''}
                href = {"/login"} 
                icon = {<i className="fas fa-fw fa-table" />}
                text = {<span>Login</span>}/>

        {/* Nav Item - Tables */}
        <Item   active = {''}
                href = {"/tracker"} 
                icon = {<i className="fas fa-fw fa-table" />}
                text = {<span>Stay Home Tracker</span>}/>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* Sidebar Toggler (Sidebar) */}
        {/* Removed toggler as sidebar requires jQuery  */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        
        </ul>
        {/* End of Sidebar */}

      </div>


  );
}
export default Sidebar;