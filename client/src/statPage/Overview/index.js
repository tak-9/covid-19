
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';

function Overview() {
    const [aus, setAus] = useState({
                                    deaths:0, 
                                    confirmed:0,
                                    recovered:0,
                                    critical:0
                                    });

    const [world, setWorld] = useState({
                                    deaths:0, 
                                    confirmed:0,
                                    recovered:0,
                                    critical:0
                                    });

    useEffect(
        () => {
            //console.log("useEffect is called.");
            const covidAusUrl = "https://corona-api.com/countries/au";
            axios.get(covidAusUrl)
            .then(res => {
                //.toLocalString() formats number with , every three digits.
                // Date.toLocalString converts GMT to local time.
                setAus({
                    deaths: res.data.data.latest_data.deaths.toLocaleString(),
                    confirmed: res.data.data.latest_data.confirmed.toLocaleString(),
                    recovered: res.data.data.latest_data.recovered.toLocaleString(),
                    critical: res.data.data.latest_data.critical.toLocaleString(),
                    updated_at: new Date(res.data.data.updated_at).toLocaleString()
                });
            });
            
            const covidWorldUrl = "https://corona-api.com/timeline";

            axios.get(covidWorldUrl)
            .then(res =>{
                setWorld({
                    deaths: res.data.data[0].deaths.toLocaleString(),
                    confirmed: res.data.data[0].confirmed.toLocaleString(),
                    recovered: res.data.data[0].recovered.toLocaleString(),
                    updated_at: new Date(res.data.data[0].updated_at).toLocaleString()
                })
            })
        }
        ,[]);

  return (
    <div>
      <div className="row">
        <h1 className="h3 mb-2 ml-3 mr-4 text-gray-800">Worldwide</h1> <span className="font-italic pt-2">Updated at {world.updated_at}</span>
      </div>
      <div className="row">
        <Card
            case = {"Confirmed"}
            number = {world.confirmed}
            icon = {"fas fa-head-side-cough"}
            color = {"warning"}
        />
        <Card
            case = {"Recovered"}
            number = {world.recovered}
            icon = {"far fa-laugh-beam"}
            color = {"primary"}
        />
        <Card
            case = {"Deaths"}
            number = {world.deaths}
            icon = {"fas fa-skull-crossbones"}
            color = {"danger"}
        />
      </div>

      <div className="row">
        <h1 className="h3 mb-2 ml-3 mr-4 text-gray-800">Australia</h1> <span className="font-italic pt-2">Updated at {aus.updated_at}</span>

      </div>
      <div className="row">
        <Card
            case = {"Confirmed"}
            number = {aus.confirmed}
            icon = {"fas fa-head-side-cough"}
            color = {"warning"}
        />
        <Card
            case = {"Recovered"}
            number = {aus.recovered}
            icon = {"far fa-laugh-beam"}
            color = {"primary"}
        />
        <Card
            case = {"Deaths"}
            number = {aus.deaths}
            icon = {"fas fa-skull-crossbones"}
            color = {"danger"}
        />
      </div>

    </div>
  );
}
export default Overview;
