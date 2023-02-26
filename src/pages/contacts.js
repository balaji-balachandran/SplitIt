import '../App.css'
import './contacts.css'
import Sidebar from '../components/SideBar/Sidebar'
import Accept from '../components/ContactDropzone/Accept'
import React from 'react'
// import Basic from '../components/ContactDropzone'

const Contacts = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div id="dropzonebox">
          <Accept />
        </div>
      </div>
    </div>
  );
};

export default Contacts