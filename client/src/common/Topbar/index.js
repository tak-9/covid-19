import React from 'react';
import User from './User';

function Topbar() {
  var userName = "Takuji Okubo";
  var userImg = "https://source.unsplash.com/QAB-WJcbgJk/60x60/";

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>

    {/* Topbar Navbar */}
    <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block" />
        <User 
          userName={userName}           
          userImg={userImg} 
        />
    </ul>
    </nav>
  );
}
export default Topbar;


