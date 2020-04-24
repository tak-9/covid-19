import React from 'react';
import useScript from '../customhook/useScript';

function PieChart(props) {

    useScript("js/demo/chart-pie-demo.js");


    return (
        <div class="card shadow mb-4">
            {/* Card Header - Dropdown  */}
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Corona Virus in Australia</h6>
                <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Dropdown Header:</div>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                    <canvas id="myPieChart" />
                </div>
                <div className="mt-4 text-center small">
                    <span className="mr-2">
                        <i className="fas fa-circle text-primary" /> Direct
                </span>
                    <span className="mr-2">
                        <i className="fas fa-circle text-success" /> Social
                </span>
                    <span className="mr-2">
                        <i className="fas fa-circle text-info" /> Referral
                </span>
                </div>
            </div>
        </div>
    );
}

export default PieChart;
