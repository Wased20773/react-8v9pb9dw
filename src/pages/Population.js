import React, { useState, useEffect } from "react";
import Loading from "../components/Loading.js";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "../styles/chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Population = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/subregion/South%20America"
        );
        setCountries(response.data);
        setLoading(false);
      } catch (e) {
        console.warn(`Error fetching countries: ${e}`);
      }
    };
    fetchCountries();
  }, []);

  const sortedCountries = [...countries].sort(
    (a, b) => b.population - a.population
  );
  const labels = sortedCountries.map((country) => country.name.common);
  const dataValues = sortedCountries.map((country) => country.population);

  const barTable = {
    labels,
    datasets: [
      {
        label: "Population",
        data: dataValues,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Population per country in South America",
        font: {
          size: 24,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Countries",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Population",
        },
      },
    },
  };

  return (
    <div className="container">
      <h2 className="text-center">Population</h2>
      <p className="text-center">
        Below is a bar chart showing the population of each country in South
        America
      </p>
      {loading ? <Loading /> : <Bar data={barTable} options={options} />}
      <div>
        {/* Dispay data raw */}
        {/* {countries.map((country) => (
        <div>
          <div>{country.name.common}</div>
          <div>{country.population}</div>
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default Population;
