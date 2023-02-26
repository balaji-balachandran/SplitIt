import '../App.css'
import MainDash from '../components/MainDash/MainDash2'
import Sidebar from '../components/SideBar/Sidebar'
import React from 'react'

const Pay = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  );
};

export default Pay