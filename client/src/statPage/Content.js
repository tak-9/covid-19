import React from 'react';
import Topbar from '../common/Topbar';
import Overview from './Overview';
import LineChartByCountry from './LineChartByCountry'
import PieChart from './PieChart';

function Content() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
          <Topbar title="Dashboard" />
          
          {/* Begin Page Content */}
          <div className="container-fluid">
            <Overview />
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <LineChartByCountry />
              </div>
              <div className="col-xl-4 col-lg-5">
                <PieChart />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Content;
