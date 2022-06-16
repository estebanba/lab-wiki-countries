import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import countriesJSON from './countries.json';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';
import ErrorPage from './components/ErrorPage';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} setCountries={setCountries} />

      <Routes>
        <Route
          path="/:countryId"
          element={
            <CountryDetail countries={countries} setCountries={setCountries} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
