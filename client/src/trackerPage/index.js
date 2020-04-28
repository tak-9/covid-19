import React, {useContext} from 'react';
import Sidebar from '../common/Sidebar';
import TrackerContent from './TrackerContent';

function TrackerPage() {
  return (
    <div id="wrapper">
        <Sidebar />
        <TrackerContent />
    </div>
  );
}

export default TrackerPage;
