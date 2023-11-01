import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import Employees from "./pages/Employees/Employees";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
