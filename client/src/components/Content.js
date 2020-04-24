import React from 'react';
import Topbar from './Topbar';
import Overview from './Overview';
import LineChartByCountry from './LineChartByCountry'
import PieChart from './PieChart';

function Content() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
          <Topbar />
          
          {/* Begin Page Content */}
          <div class="container-fluid">
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
