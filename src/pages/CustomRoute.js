import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading.js";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Title, Tooltip, Legend, CategoryScale);

const CustomRoute = () => {
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

  const leftDrivers = countries.filter(
    (country) => country.car.side === "left"
  ).length;

  const rightDrivers = countries.filter(
    (country) => country.car.side === "right"
  ).length;

  const pieChart = {
    labels: ["Left-side drivers", "Right-side drivers"],
    datasets: [
      {
        label: "Driving Side",
        data: [leftDrivers, rightDrivers],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // left-side
          "rgba(54, 162, 235, 0.6)", // right-side
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Amount of countries who drive left and right",
        font: {
          size: 24,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="container">
      <h2 className="text-center">Drivers</h2>
      <p className="text-center">
        Shows the percentage of left and right drivers in South America
      </p>
      {loading ? <Loading /> : <Pie data={pieChart} options={options} />}
      <div>
        {/* Display data raw */}
        {/* {countries.map((country) => (
        <div>
          <div>{country.name.common}</div>
          <div>{country.car.side}</div>
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default CustomRoute;
