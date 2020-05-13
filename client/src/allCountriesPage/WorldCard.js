import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as util from './util';
import ReactTable from './WorldTable';
// import { useMemo } from "react-table";

function WorldCard() {

    const [allCountries, setAllCountries] = useState();

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
                        ranking: parseInt([i])+1,
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
                    Header: "Ranking",
                    accessor: "ranking", 
                }, 
                {
                    Header: "Country",
                    accessor: "name"
                }, 
                {
                    Header: "Confirmed",
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
 
    /*
    const columns = React.useMemo(
        () => [
                {
                    Header: (<span>Confirmed<br/>Ranking</span>),
                    accessor: "ranking", 
                }, 
                {
                    Header: "Country",
                    accessor: "name"
                }, 
                {
                    Header: (<span>Total<br/>Confirmed</span>),
                    accessor: "confirmed"
                },
                {
                    Header: (<span>Total<br/>Death</span>),
                    accessor: "deaths"
                },
                {
                    Header: (<span>Total<br/>Recovered</span>),
                    accessor: "recovered"
                },
                // {
                //     Header: "New Cases",
                //     accessor: "today_confirmed"
                // }
        ],
        []
    )
    */
 
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Worldwide Cases</h6>
            </div>
            <div className="card-body">
                columns
                {console.log("columns", columns)}
                {((typeof allCountries!=='undefined') && (typeof columns!=='undefined')) ? 
                    <ReactTable columns={columns} data={allCountries} /> : <span>Loading...</span>}                
            </div>
        </div>

  );
}

export default WorldCard;
