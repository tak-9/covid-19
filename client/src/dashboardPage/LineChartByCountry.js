import React, {Component} from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import chartColors from './chartUtil';

class LineChartByCountry extends Component {
    chartRef = React.createRef();

    componentDidMount(){
        this.getTimelineDataAus() 
        .then(result => this.createChart(result));
    }

    getTimelineDataAus() {
        return new Promise((resolve, reject) => { 
            const coronaAustUrl = "https://corona-api.com/countries/au";
            axios.get(coronaAustUrl)
            .then(res => {
                // console.log("getTimelineDataAus() res", res.data.data.timeline)
                resolve(res.data.data.timeline);
            })
            .catch(err=>{
                reject(err);
            })
        })
    }

    createChart(input){
        console.log("createChart()", input);
 
        var confirmedNumbers = [];
        var deathsNumbers = [];
        var recoveredNumbers = [];
        var dates = [];
        for (let i=0; i<input.length ;i++){
            confirmedNumbers.unshift(input[i].confirmed);
            deathsNumbers.unshift(input[i].deaths);
            recoveredNumbers.unshift(input[i].recovered);
            dates.unshift(input[i].date);
        }
        console.log(dates);
        const myChartRef = this.chartRef.current.getContext("2d");  
        new Chart(myChartRef, {
            type: 'line',
            data: {
              labels: dates,
              datasets: [{
                label: "Confirmed",
                lineTension: 0.1,
                backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: chartColors.yellow,
                pointRadius: 2,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: confirmedNumbers,
              },
              {
                label: "Recovered",
                lineTension: 0.1,
                backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 2,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: recoveredNumbers,
              } ,
              {
                label: "Deaths",
                lineTension: 0.1,
                borderColor: chartColors.red,
                pointRadius: 2,
                pointHoverRadius: 3,
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: deathsNumbers,
              }
            
            ],
            },
            options: {
              maintainAspectRatio: false,
              layout: {
                padding: {
                  left: 10,
                  right: 25,
                  top: 25,
                  bottom: 0
                }
              },
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    maxTicksLimit: 7
                  }
                }],
                yAxes: [{
                  ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                  },
                  gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                  }
                }],
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
              }
            }
          });
    }

    render(){
        return (
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Number of Cases in Australia</h6>
                    {/*-- Dropdown menu has been removed from here -- */}
                </div>
                {/* Card Body */}
                <div className="card-body">
                    <div className="chart-area">
                    <canvas id="myAreaChart" ref={this.chartRef} />
                    </div>

                    {/* Legend */}
                    <div class="mt-4 text-center small">
                    <span class="mr-2">
                      <i class="fas fa-circle text-warning"></i> Confirmed
                    </span>
                    <span class="mr-2">
                      <i class="fas fa-circle text-primary"></i> Recovered
                    </span>
                    <span class="mr-2">
                      <i class="fas fa-circle text-danger"></i> Deaths
                    </span>
                  </div>

                </div>
            </div>        
        )
    }
}

export default LineChartByCountry;