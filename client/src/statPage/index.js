import React from 'react';
import Sidebar from '../common/Sidebar';
import Content from './Content';
import useScript from '../customhook/useScript';

function StatPage() {
  useScript("js/sb-admin-2.js");
  return (
    <div id="wrapper">
        <Sidebar />
        <Content />
    </div>
  );
}
export default StatPage;
