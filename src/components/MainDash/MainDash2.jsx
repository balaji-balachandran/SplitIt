import React from "react";
import Cards from "../Cards/Cards2";
import Table from "../Table/Table2";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Transaction Information</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;