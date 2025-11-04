import React, { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../styles/chart.css'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const Population = ({ countries }) => {
  const sortedCountries = [...countries].sort(
    (a, b) => b.population - a.population
  );
  const labels = sortedCountries.map((country) => country.name.common);
  const dataValues = sortedCountries.map((country) => country.population);

  const barTable = {
    labels,
    datasets: [
      {
        label: 'Population',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-center">Population</h2>
      <p className="text-center">
        Below is a bar chart showing the population of each country in South
        America
      </p>
      <Bar data={barTable} className="bar-container"/>

      {/* Dispay data raw */}
      {/* {countries.map((country) => (
        <div>
          <div>{country.name.common}</div>
          <div>{country.population}</div>
        </div>
      ))} */}
    </div>
  );
};

export default Population;
