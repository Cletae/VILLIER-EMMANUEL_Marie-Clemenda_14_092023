import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Table from "../../plugins/Tables";
import "./Employees.css";

const links = [{ title: "Home", path: "/" }];

function Employees() {
  return (
    <div>
      <header>
        <nav>
          <Header title="HRnet" />
          <Navigation links={links} />
        </nav>
      </header>
      <Table />
    </div>
  );
}

export default Employees;
