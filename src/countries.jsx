import React, { use, useState } from 'react';
import Country from './Country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('this is a visited country', country);
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags  = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => 
                    <li
                    key={country.cca3.cca3}
                    >{country.name .common}</li>)
                }
            </ol>
            <div className='visited-flag'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}
                    country={country}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;