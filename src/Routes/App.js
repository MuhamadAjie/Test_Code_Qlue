import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import TableTodos from "../Components/TableTodos";
import GraphData from "../Components/GraphData";
import MapLocation from "../Components/MapLocation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="table" element={<TableTodos />} />
        <Route path="graph" element={<GraphData />} />
        <Route path="map" element={<MapLocation />} />
      </Routes>
    </div>
  );
}

export default App;
