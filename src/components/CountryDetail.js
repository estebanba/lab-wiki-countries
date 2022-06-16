import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetail({ countries }) {
  const { countryId } = useParams();
  console.log('countryId -->', countryId);

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === countryId;
  });

  return (
    <div>
      <h1>CountryDetail</h1>
      {!foundCountry && <h2>Country not found</h2>}
      {foundCountry && (
        <div>
          <h2>{foundCountry.name.common}</h2>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt="country"
          />
        </div>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}

export default CountryDetail;
