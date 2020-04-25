import React from 'react';
import Item from './Item';

function Sidebar() {

  return (
      <div>
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-virus" />
            </div>
            <div className="sidebar-brand-text mx-3">COVID-19 App</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <Item   className = {"active"}
                href = {"index.html"} 
                icon = {<i className="fas fa-fw fa-tachometer-alt" />}
                text = {<span>Dashboard</span>}/>

        {/* Nav Item - Charts */}
        <Item   active = {''}
                href = {"index.html"} 
                icon = {<i className="fas fa-fw fa-chart-area" />}
                text = {<span>Charts</span>}/>

        {/* Nav Item - Tables */}
        <Item   active = {''}
                href = {"tables.html"} 
                icon = {<i className="fas fa-fw fa-table" />}
                text = {<span>Tables</span>}/>

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