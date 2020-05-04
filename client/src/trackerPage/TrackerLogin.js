import React from 'react';
import Login from '../loginPage/Login';

function TrackerLogin() {

  return ( 
    <div>
        <h3 className="ml-3"><i class="fas fa-exclamation-triangle text-warning"></i> Login required to view this page.</h3>
        <Login />
    </div>
);
}
export default TrackerLogin;
