import React from 'react';
import Sidebar from '../common/Sidebar';
import Login from './Login';
import useScript from '../customhook/useScript';
import Topbar from '../common/Topbar'

function LoginPage() {
  useScript("js/sb-admin-2.js");
  return (
    <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar title="Login" />
                <Login />
            </div>
        </div>
    </div>
  );
}
export default LoginPage;
