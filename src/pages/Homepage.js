import React, { useEffect } from 'react';
import axios from 'axios';

const Homepage = ({ countries }) => {
  const totalPopulation = countries.reduce(
    (sum, country) => sum + country.population,
    0
  );

  return (
    <div className="container">
      <h2 className="text-center">Welcome, this is the homepage</h2>
      <p className="text-center">
        This website uses information about South America, and the data that
        each country has.
      </p>

      <div>
        <p className="text-center">
          Below, you can see a list of what is being collected:
        </p>

        <ul>
          <li>Number of countries collected: {countries.length}.</li>
          <li>Name, flag image, and flag description.</li>
          <li>Total population of South America: {totalPopulation}.</li>
          <li>What side of the car do drivers drive in.</li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
