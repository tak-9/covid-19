import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as util from './util';


function Content() {

    var [allCountries, setAllCountries] = useState();

    useEffect(
        () => {
            console.log("useEffect is called.");
            const covid19Url = "https://corona-api.com/countries";
            axios.get(covid19Url)
            .then(res => {
                //console.log(res);
                //sort by country.latest_data.confirmed
                var sortedCountryData = util.sortByConfirmedCases(res.data.data);
                sortedCountryData = util.top20Cases(sortedCountryData);
                setAllCountries(sortedCountryData);
            });
        }
    ,[]);
 
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-7 col-md-9">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Top 20 Countries by Confirmed Cases</h6>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-responsive">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Country</th>
                                        <th>Total Confirmed Cases</th>
                                        <th>Total Death</th>
                                        <th>Total Recovered</th>
                                        <th>New Cases (Today)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log("render...", allCountries)}  
                                    {allCountries ? 
                                        allCountries.map((country, index) => 
                                        <TableRow 
                                            key={index} 
                                            num={index+1} 
                                            country={country}/>
                                        ) : 
                                        (
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        )
                                        } 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

function TableRow(props){
    return (
        <tr>
            {console.log("TableRow")}
            <td>{props.num}</td>
            <td>{props.country.name}</td>
            <td>{props.country.latest_data.confirmed}</td>
            <td>{props.country.latest_data.deaths}</td>
            <td>{props.country.latest_data.recovered}</td>
            <td>{props.country.today.confirmed}</td>
        </tr>
    )
}



export default Content;
