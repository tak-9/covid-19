import React from 'react';
import useScript from '../customhook/useScript';

function LineChartByCountry() {

    useScript("js/demo/chart-area-demo.js");

    return (
        <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Number of Cases</h6>
                <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </div>
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