import React from 'react';
import useScript from '../customhook/useScript';

function LineChartByCountry() {

    useScript("js/demo/chart-area-demo.js");

    return (
        <div className="card shadow mb-4 h-100">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Number of Cases</h6>
                {/*-- Dropdown menu has been removed from here -- */}
            </div>
            {/* Card Body */}
            <div className="card-body">
                <div className="chart-area">
                <canvas id="myAreaChart" />
                </div>
            </div>
        </div>        
    )
}

export default LineChartByCountry;