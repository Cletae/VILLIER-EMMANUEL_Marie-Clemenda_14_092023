import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Form from "../../components/Form/Form";
import "./Home.css";

const Home = () => {
  const links = [{ title: "View Current Employees", path: "/employees" }];

  return (
    <div>
      <header>
        <nav>
          <Header title="HRnet" />
          <Navigation links={links} />
        </nav>
      </header>
      <Form />
    </div>
  );
};

export default Home;
