import React, {Component} from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import chartColors, { chartColorsInHex } from './chartUtil';

class PieChart extends Component {
    chartRef = React.createRef();
   
    constructor(props){
        super(props);
        this.state = {
            states: [],
            confirmedCases: []            
        }
    }

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
                    if (!res.data.sheets['latest totals'][i]['State or territory'].includes("National")){
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
        const myChartRef = this.chartRef.current.getContext("2d");
        var confirmedCases = [];
        var states = [];
        //var labels = [];
        for (let i=0; i<input.length; i++){
            confirmedCases.push(input[i].cases);
            states.push(input[i].state);
            //labels.push(input[i].state + "(" + input[i].cases + ")")
        }

        this.setState({
            states: states,
            confirmedCases: confirmedCases
        });

        //console.log(states, confirmedCases);
        
        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
              labels: states,
              datasets: [{
                data: confirmedCases,
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
                display: false, 
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
            </div>

            <div className="card-body">
                <div className="chart-pie pt-2 pb-0">
                    <canvas id="myChart" ref={this.chartRef} />
                </div>
            </div>
            <div className="pb-4">
                {/* Legend */}
                <div className="mt-4 text-center small">
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.red}}></i> {this.state.states[0]} : {this.state.confirmedCases[0]}
                    </span>
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.blue}}></i> {this.state.states[1]} : {this.state.confirmedCases[1]}
                    </span>
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.green}}></i> {this.state.states[2]} : {this.state.confirmedCases[2]}
                    </span>
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.orange}}></i> {this.state.states[3]} : {this.state.confirmedCases[3]}
                    </span>
                    <span className="mr-2">
                    <br/>
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.purple}}></i> {this.state.states[4]} : {this.state.confirmedCases[4]}
                    </span>
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.yellow}}></i> {this.state.states[5]} : {this.state.confirmedCases[5]}
                    </span>
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.grey}}></i> {this.state.states[6]} : {this.state.confirmedCases[6]}
                    </span>
                    <span className="mr-2">
                    <i className="fas fa-circle" style={{"color": chartColorsInHex.grey}}></i> {this.state.states[7]} : {this.state.confirmedCases[7]}
                    </span>
                </div>

            </div>
        </div>
        )
    };
}

export default PieChart;
