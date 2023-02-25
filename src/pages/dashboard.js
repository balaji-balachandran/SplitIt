import '../App.css'
import MainDash from '../components/MainDash/MainDash'
import Sidebar from '../components/SideBar/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  );
};

export default Dashboard