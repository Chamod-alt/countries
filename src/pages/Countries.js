
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';

import Navbar from "../components/Navbar";


function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,capital,region,population,languages,flags')
      .then(res => {
        setCountries(res.data);
        setFilteredCountries(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    let results = [...countries];

    // Filter by country name
    if (searchQuery.trim() !== '') {
      results = results.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by region
    if (regionFilter) {
      results = results.filter(country => country.region === regionFilter);
    }

    // Filter by language
    if (languageFilter) {
      results = results.filter(country => {
        if (!country.languages) return false;
        return Object.values(country.languages).some(lang =>
          lang.toLowerCase().includes(languageFilter.toLowerCase())
        );
      });
    }

    setFilteredCountries(results);
  }, [searchQuery, regionFilter, languageFilter, countries]);

  return (
    <div>
      <Navbar></Navbar>
    <div className="container mt-3">
        
      {/* Filters */}
      <div className="mb-3 row  align-items-center">
        <div className="col-md-4 mb-2">
            
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value)}
          >
            <option value=""> Filter by Region</option>
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
            placeholder="Filter by Language..."
            className="form-control"
            value={languageFilter}
            onChange={e => setLanguageFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Country Cards *
      <div className="row">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        ) : (
          <p className="text-center">No countries found.</p>
        )}
      </div>

      */}

<div className="row">
  {filteredCountries.map((country, index) => (
    <div key={index} className="col-md-4 mb-3">
      <CountryCard country={country}  />
    </div>
  ))}
</div>
  </div>
    </div>
  );
}

export default Countries;
