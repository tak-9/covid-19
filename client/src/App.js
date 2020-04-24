import React from 'react';
import StatPage from './pages/StatPage';
import useScript from './customhook/useScript';

function App() {

  useScript("js/sb-admin-2.js");

  return (
    <div>
      <StatPage />  
    </div>
  );
}
export default App;
