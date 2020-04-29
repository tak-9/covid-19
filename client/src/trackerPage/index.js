import React from 'react';
import Sidebar from '../common/Sidebar';
import TrackerContent from './TrackerContent';
import useScript from '../customhook/useScript';

function TrackerPage() {
  useScript("js/sb-admin-2.js");

  return (
    <div id="wrapper">
        <Sidebar />
        <TrackerContent />
    </div>
  );
}

export default TrackerPage;
