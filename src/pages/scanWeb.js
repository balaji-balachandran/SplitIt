import '../App.css'
import Sidebar from '../components/SideBar/Sidebar'
import WebcamCapture from './scan'
import React from 'react'

const ScanFunc = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <WebcamCapture/>
      </div>
    </div>
  );
};

export default ScanFunc;