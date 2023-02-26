import '../App.css'
import MainDash from '../components/MainDash/MainDash'
import Sidebar from '../components/SideBar/Sidebar'
import React from 'react'

const Contacts = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Contacts