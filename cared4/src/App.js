import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from './Pages/Home';
import About from "./Pages/About";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Terms from './Pages/Terms&Conditions';
import SearchForms from './Pages/SearchForms';
import Account from './Pages/Account';
import CloseUp from "./Pages/CloseUp";
import Results from "./Pages/Results";
import './Styles/App.css';

/**
 * Main application brain and routes
 * @returns Returns the application
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/terms" element={<Terms />} />
        <Route path="/search" element={<SearchForms/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/closeup" element={<CloseUp/>}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
    </Router>
  );
}

export default App;
