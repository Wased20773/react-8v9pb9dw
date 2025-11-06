import React, { useEffect, useState } from "react";
import { Routes, Route, Navigation } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import List from "./pages/List.js";
import Population from "./pages/Population.js";
import CustomRoute from "./pages/CustomRoute.js";
import NavBar from "./components/NavBar.js";
import axios from "axios";

import "./style.css";

// API to use to show all countries in South America...
// https://restcountries.com/v3.1/subregion/South%20America

// For List (Table)
// access name of country: data.name.common
// access their flags: data.flag (short name), data.flags.png (img)
// information: data.flags.alt

// For Population (Bar Chart)
// access their popularity: data.population

// For Custom Route (Pie Chart)
// access car side: data.car.side ("left" or "right")

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<List />} />
        <Route path="/population" element={<Population />} />
        <Route path="/custom" element={<CustomRoute />} />
      </Routes>
    </div>
  );
}
