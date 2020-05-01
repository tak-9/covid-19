import React, {Component} from 'react';
import Chart from 'chart.js';
import axios from 'axios';

class PieChart extends Component {
    chartRef = React.createRef();
   
    componentDidMount(){
        this.getDataByState()
        .then(result => this.createChart(result));
    }

    getDataByState() {
        return new Promise((resolve, reject) => { 
            const coronaAustUrl = "https://interactive.guim.co.uk/docsdata/1q5gdePANXci8enuiS4oHUJxcxC13d6bjMRSicakychE.json";
            axios.get(coronaAustUrl)
            .then(res => {
                var statesConfirmedCases = [];
                // foo['bar bar'] to access JSON key with space. 
                for (let i=0; i < res.data.sheets['latest totals'].length; i++){
                    if (res.data.sheets['latest totals'][i]['State or territory'] !== "National"){
                        statesConfirmedCases.push({ 
                            state: res.data.sheets['latest totals'][i]['State or territory'],
                            cases: res.data.sheets['latest totals'][i]['Confirmed cases (cumulative)']
                        })    
                    }
                }
                statesConfirmedCases.sort((a,b) => b.cases - a.cases);
                resolve(statesConfirmedCases);
            })
            .catch(err=>{
                reject(err);
            })
        })
    }

    createChart(input) {
        var chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)'
        };

        const myChartRef = this.chartRef.current.getContext("2d");
        var confirmedCases = [];
        var states = [];
        var labels = [];
        for (let i=0; i<input.length; i++){
            confirmedCases.push(input[i].cases);
            states.push(input[i].state);
            labels.push(input[i].state + "(" + input[i].cases + ")")
        }
        //console.log(states, confirmedCases);
        
        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                data: confirmedCases,
                //backgroundColor: ["#4262be","#377acf","#3490dc","#3fa6e7","#55bcf0","#70d1f7","#8ee5ff"], 
                //backgroundColor: ["#d1a535","#d8ae4e","#dfb865","#e6c27b","#ebcc91","#f0d6a7","#f5e0bd"],
                backgroundColor: [
                    chartColors.red,
                    chartColors.blue,
                    chartColors.green,
                    chartColors.orange,
                    chartColors.purple,
                    chartColors.yellow,
                    chartColors.grey
                ],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
              }],
            },
            options: {
              maintainAspectRatio: false,
              tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
              },
              legend: {
                display: true, 
                position: "bottom", 
              },
              cutoutPercentage: 50,          
            }
        })

    }

    render() {
        return ( 
        <div className="card shadow mb-4">
            {/* Card Header - Dropdown  */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Confirmed Cases by Australian States</h6>
                {/*-- Dropdown menu has been removed from here -- */}
            </div>

            <div className="card-body">
                <div className="chart-pie pt-5">
                    <canvas id="myChart" ref={this.chartRef} />
                </div>
            </div>
        </div>
        )
    };
}

export default PieChart;
