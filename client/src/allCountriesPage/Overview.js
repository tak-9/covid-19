import React, {useState, useEffect} from 'react';
import Card from '../common/Card';
import axios from 'axios';

function Overview() { 

    const [world, setWorld] = useState({
        deaths:0, 
        confirmed:0,
        recovered:0,
        critical:0
        });

        useEffect(
            () => {
                const covidWorldUrl = "https://corona-api.com/timeline";
                axios.get(covidWorldUrl)
                .then(res =>{
                    setWorld({
                        deaths: res.data.data[0].deaths.toLocaleString(),
                        confirmed: res.data.data[0].confirmed.toLocaleString(),
                        recovered: res.data.data[0].recovered.toLocaleString(),
                        updated_at: new Date(res.data.data[0].updated_at).toLocaleString('en-AU')
                    })
                })
            }
            ,[]);

    return(
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
    </div>
    )
}

export default Overview;