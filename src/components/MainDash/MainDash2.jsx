import React from "react";
import Cards from "../Cards/Cards2";
import Table from "../Table/Table2";
import PayTable from "../Table/PayTable"

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Outstanding Dues</h1>
      <Cards />
      <Table />
      <PayTable />
    </div>
  );
};

export default MainDash;