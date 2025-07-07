// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

/*
function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data);
        setFilteredCountries(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    let filtered = countries;
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (regionFilter) {
      filtered = filtered.filter(country => country.region === regionFilter);
    }
    if (languageFilter) {
      filtered = filtered.filter(country => {
        const languages = country.languages ? Object.values(country.languages) : [];
        return languages.some(lang => lang.toLowerCase().includes(languageFilter.toLowerCase()));
      });
    }
    setFilteredCountries(filtered);
  }, [searchTerm, regionFilter, languageFilter, countries]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">REST Countries Explorer</h1>
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Search by country name"
            className="form-control"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-control"
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Filter by Language"
            className="form-control"
            value={languageFilter}
            onChange={e => setLanguageFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredCountries.map((country, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={country.flags.svg} className="card-img-top" alt={`${country.name.common} flag`} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">
                  <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}<br />
                  <strong>Region:</strong> {country.region}<br />
                  <strong>Population:</strong> {country.population.toLocaleString()}<br />
                  <strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
*/

function Countries() {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all")
        .then(res => {
          setCountries(res.data);
          console.log(res.data);  // Optional: for debugging
        })
        .catch(err => {
          console.error("API Error:", err);
        });
    }, []);
  
    return (
      <div>
        <Navbar />
        <h2>All Countries</h2>
        <ul>
          {countries.map((c, i) => (
            <li key={i}>{c.name.common}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Countries;
