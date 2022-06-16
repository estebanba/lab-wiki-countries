import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountriesList({ countries, setCountries }) {
  useEffect(() => {
    setCountries(countries);
  }, [countries, setCountries]);

  return (
    <div>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.alpha3Code}>
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
