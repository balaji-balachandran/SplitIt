import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
// import About from './pages/about';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Process from './pages/proces';
import './pages/styles.css'
import Pay from './pages/pay';
import Contacts from './pages/contacts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' component={About} />
        <Route path='/contact-us' component={Contact} /> */}
        <Route path='/process' element={<Dashboard />} />
        <Route path='/proces' element={<Process />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/pay' element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;