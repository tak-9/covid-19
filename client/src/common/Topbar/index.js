import React from 'react';
import User from './User';

function Topbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          <User />
      </ul>
    </nav>
  );
}
export default Topbar;


