import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function Sidebar(props) {
  return (
        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */} 
            <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-virus" />
                    </div>
                    <div className="sidebar-brand-text mx-3">COVID-19 App</div>
            </Link>
            
            {/* Divider */}
            <hr className="sidebar-divider" />

            { /* Sidebar Heading */}
            <div className="sidebar-heading">
            Covid-19 Information
            </div>

            {/* Nav Item - Dashboard */}
            <Item   className = {props.currentPage === "dashboard" ? "active" : "" }
                    href = {"/"} 
                    icon = {<i className="fas fa-fw fa-tachometer-alt" />}
                    text = {<span>Dashboard</span>}/>

            <Item   className = {props.currentPage === "allcountries" ? "active" : "" }
                    href = {"/allcountries"} 
                    icon = {<i className="fas fa-fw fa-table" />}
                    text = {<span>Worldwide</span>}/>

            {/* Nav Item - Charts */}
            {/* <Item   
                    href = {"/"} 
                    icon = {<i className="fas fa-fw fa-chart-area" />}
                    text = {<span>Charts</span>}/> */}

            {/* Nav Item - Tables */}
            {/* <Item 
                    href = {"/"} 
                    icon = {<i className="fas fa-fw fa-table" />}
                    text = {<span>Tables</span>}/> */}

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            { /* Sidebar Heading */}
            <div className="sidebar-heading">
            User Management
            </div>

            {/* Nav Item - Login */}
            <Item   className = {props.currentPage === "login" ? "active" : "" }
                    href = {"/login"} 
                    icon = {<i className="fas fa-sign-in-alt" />}
                    text = {<span>Login</span>}/>

            {/* Nav Item - SignUp */}
            <Item   className = {props.currentPage === "signup" ? "active" : "" }
                    href = {"/signup"} 
                    icon = {<i className="fas fa-user-plus" />}
                    text = {<span>Sign Up</span>}/>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />

            { /* Sidebar Heading */}
            <div className="sidebar-heading">
            Login Required
            </div>

            {/* Nav Item - Tracker */}
            <Item   className = {props.currentPage === "tracker" ? "active" : "" }
                    href = {"/tracker"} 
                    icon = {<i className="fas fa-house-user" />}
                    text = {<span>Stay Home Tracker</span>}/>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* Sidebar Toggler (Sidebar) */}
            {/* Removed toggler as sidebar requires jQuery  */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
            {/* End of Sidebar */}
        </ul>
  );
}
export default Sidebar;