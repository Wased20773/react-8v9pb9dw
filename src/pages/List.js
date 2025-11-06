import React, { useState, useEffect } from "react";
import Loading from "../components/Loading.js";
import axios from "axios";
import "../styles/Cards.css";

const List = () => {
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

  return (
    <div className="container">
      <h2 className="text-center">List</h2>
      <p className="text-center">
        We list the countries of South America, thier flags, and information
        about each country.
      </p>

      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-column gap-3">
          {countries.map((country) => (
            <div key={country.cca3} className="card p-2 card-container">
              <div className="mb-3">
                <h3>{country.name.common}</h3>
                <img
                  src={country.flags.png}
                  width={200}
                  alt={`flag ${country.flag}`}
                />
              </div>
              <p>
                {country.flags.alt ||
                  "There is no description for this country"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
