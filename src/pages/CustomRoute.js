import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../styles/chart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomRoute = ({ countries }) => {
  const leftDrivers = countries.filter(
    (country) => country.car.side === 'left'
  ).length;

  const rightDrivers = countries.filter(
    (country) => country.car.side === 'right'
  ).length;

  const pieChart = {
    labels: ['Left-side drivers', 'Right-side drivers'],
    datasets: [
      {
        label: 'Driving Side',
        data: [leftDrivers, rightDrivers],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // left-side
          'rgba(54, 162, 235, 0.6)', // right-side
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-center">Drivers</h2>
      <p className="text-center">
        Shows the percentage of left and right drivers in South America
      </p>

      <Pie data={pieChart} className="pie-container" />

      {/* Display data raw */}
      {/* {countries.map((country) => (
        <div>
          <div>{country.name.common}</div>
          <div>{country.car.side}</div>
        </div>
      ))} */}
    </div>
  );
};

export default CustomRoute;
