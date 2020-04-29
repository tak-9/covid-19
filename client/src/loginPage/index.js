import React from 'react';
import Sidebar from '../common/Sidebar';
import Login from './Login';
import useScript from '../customhook/useScript';

function LoginPage() {
  useScript("js/sb-admin-2.js");
  return (
    <div id="wrapper">
        <Sidebar />
        <Login />
    </div>
  );
}
export default LoginPage;
