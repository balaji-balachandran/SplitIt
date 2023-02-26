import React from "react";
import Cards from "../Cards/processCards";
import Table from "../Table/processTable";
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