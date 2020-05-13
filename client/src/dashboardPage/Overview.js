
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import axios from 'axios';

function Overview() {
    const [ausTotal, setAusTotal] = useState({
                                    deaths:0, 
                                    confirmed:0,
                                    recovered:0,
                                    critical:0
                                    });

    const [ausLatest, setAusLatest] = useState({
                                        new_confirmed:0, 
                                        new_recovered:0,
                                        new_death:0,
                                        updated_at_current: '',
                                        updated_at_previous: ''
                                    });

    useEffect(
        () => {
            //console.log("useEffect is called.");
            const covidAusUrl = "https://corona-api.com/countries/au";
            axios.get(covidAusUrl)
            .then(res => {
                //.toLocalString() formats number with , every three digits.
                // Date.toLocalString converts GMT to local time.
                setAusTotal({
                    deaths: res.data.data.latest_data.deaths.toLocaleString(),
                    confirmed: res.data.data.latest_data.confirmed.toLocaleString(),
                    recovered: res.data.data.latest_data.recovered.toLocaleString(),
                    critical: res.data.data.latest_data.critical.toLocaleString(),
                    updated_at: new Date(res.data.data.updated_at).toLocaleString('en-AU')
                });
                setAusLatest({
                    new_confirmed: res.data.data.timeline[0].new_confirmed.toLocaleString('en-AU'),
                    new_recovered: res.data.data.timeline[0].new_recovered.toLocaleString('en-AU'),
                    new_deaths: res.data.data.timeline[0].new_deaths.toLocaleString('en-AU'),
                    updated_at_current: new Date(res.data.data.timeline[0].updated_at).toLocaleString('en-AU'),
                    updated_at_previous: new Date(res.data.data.timeline[1].updated_at).toLocaleString('en-AU')
                });
            });
            
        }
        ,[]);

  return (
    <div>
      <div className="row">
        <h1 className="h3 mb-2 ml-3 mr-4 text-gray-800">Total Cases in Australia</h1> <span className="font-italic pt-2">Updated at {ausTotal.updated_at}</span>

      </div>
      <div className="row">
        <Card
            case = {"Confirmed"}
            number = {ausTotal.confirmed}
            icon = {"fas fa-head-side-cough"}
            color = {"warning"}
        />
        <Card
            case = {"Recovered"}
            number = {ausTotal.recovered}
            icon = {"far fa-laugh-beam"}
            color = {"primary"}
        />
        <Card
            case = {"Deaths"}
            number = {ausTotal.deaths}
            icon = {"fas fa-skull-crossbones"}
            color = {"danger"}
        />
      </div>


      <div className="row">
          <h1 className="h3 mb-2 ml-3 mr-4 text-gray-800">New Cases in Australia</h1> <span className="font-italic pt-2">Between {ausLatest.updated_at_previous} and {ausLatest.updated_at_current}</span>

      </div>
      <div className="row">
        <Card
            case = {"Confirmed"}
            number = {ausLatest.new_confirmed}
            icon = {"fas fa-head-side-cough"}
            color = {"warning"}
        />
        <Card
            case = {"Recovered"}
            number = {ausLatest.new_recovered}
            icon = {"far fa-laugh-beam"}
            color = {"primary"}
        />
        <Card
            case = {"Deaths"}
            number = {ausLatest.new_deaths}
            icon = {"fas fa-skull-crossbones"}
            color = {"danger"}
        />
      </div>


    </div>
  );
}
export default Overview;
