import '../App.css'
import MainDash from '../components/MainDash/proces'
import Sidebar from '../components/SideBar/Sidebar'
import React from 'react'

const Proces = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  );
};

export default Proces