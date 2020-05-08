import React from 'react';
import Login from '../loginPage/Login';

function TrackerLogin() {

  return ( 
    <div>
        <h4 className="ml-3"><i className="fas fa-exclamation-triangle text-warning"></i> Login required to view this page.</h4>
        <Login />
    </div>
);
}
export default TrackerLogin;
