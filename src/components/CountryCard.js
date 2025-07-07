import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img src={country.flags.png} alt={country.name.common} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p className="card-text">
            <strong>Capital:</strong> {country.capital?.[0] || 'N/A'} <br />
            <strong>Region:</strong> {country.region} <br />
            <strong>Population:</strong> {country.population.toLocaleString()} <br />
            <strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
