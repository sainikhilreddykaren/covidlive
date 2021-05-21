
import './covid.css'
import Time from './time.js'
import React, { useEffect, useState } from 'react'

const Covid1 = () => {
    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setdata(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <header>
                <h1>COVID CASES IN INDIA</h1>
            </header>
            <div className="live">
                <div className="dot">
                    
                </div>

                <div className="blink">
                    <p>LIVE</p>
                </div>

            </div>
           

            <div className="update">
                <p>Data Updated at: {data.lastupdatedtime}</p>
            </div>
            <div>
                <Time/>
            </div>

            <div className="main">
                <div className="div1">
                    <p>Active cases: {data.active}</p>

                </div>
                <div className="div2">
                    <p>Confirmed Cases: {data.confirmed}</p>

                </div>
                <div className="div3">
                    <p>Death Cases: {data.deaths}</p>

                </div>
                <div class="div4">
                    <p>Recovered Cases: {data.recovered}</p>

                </div>


            </div>
        </>
    )
}

export default Covid1
