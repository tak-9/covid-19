import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as util from './util';
import ReactTable from './WorldTable';
// import { useMemo } from "react-table";

function WorldCard() {

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
                var sorted=[];
                for (var i=0; i<sortedCountryData.length; i++){
                    var countriesJSON =  {
                        name: sortedCountryData[i].name,
                        confirmed: sortedCountryData[i].latest_data.confirmed,
                        deaths: sortedCountryData[i].latest_data.deaths,
                        recovered: sortedCountryData[i].latest_data.recovered,
                        today_confirmed: sortedCountryData[i].latest_data.today_confirmed
                    }
                    sorted.push(countriesJSON);
                }
                setAllCountries(sorted);
            });
        }
    ,[]);

    
    const columns = React.useMemo(
        () => [
                {
                    Header: "Country",
                    accessor: "name"
                }, 
                {
                    Header: "Total Confirmed",
                    accessor: "confirmed"
                },
                {
                    Header: "Total Death",
                    accessor: "deaths"
                },
                {
                    Header: "Total Recovered",
                    accessor: "recovered"
                },
                // {
                //     Header: "New Cases",
                //     accessor: "today_confirmed"
                // }
        ],
        []
    )
 
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Worldwide Cases</h6>
            </div>
            <div className="card-body">
                {(typeof allCountries!=='undefined') ? <ReactTable columns={columns} data={allCountries} defaultPageSize="20" /> : <span>Loading...</span>}                
            </div>
        </div>

  );
}

export default WorldCard;
