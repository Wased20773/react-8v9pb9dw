import React from 'react';
import '../styles/Cards.css';

const List = ({ countries }) => {
  return (
    <div className="container">
      <h2 className="text-center">List</h2>
      <p className="text-center">
        We list the countries of South America, thier flags, and information
        about each country.
      </p>
      <div className="d-flex flex-column gap-3">
        {countries.map((country) => (
          <div key={country.cca3} className="card p-2 card-container">
            <div className="mb-3">
              <h3>{country.name.common} ({country.flag})</h3>
              <img
                src={country.flags.png}
                width="200px"
                alt={`flag ${country.flag}`}
              />
            </div>
            <p>
              {country.flags.alt || 'There is no description for this country'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
