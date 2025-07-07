import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,capital,region,population,languages,flags')
      .then(res => setCountries(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);
  

  return (
    <div className="container mt-4">
      <h2 className="mb-4"> All Countries</h2>
      <div className="row">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
