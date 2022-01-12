import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
