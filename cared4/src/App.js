import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dataSource from "./dataSource";
import Home from './Pages/Home';
import About from "./Pages/About";
import './Styles/App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Terms from './Pages/Terms&Conditions';
import SearchForms from './Pages/SearchForms';
import Account from './Pages/Account';
import CloseUp from "./Pages/CloseUp";
import Results from "./Pages/Results";

const App = () => {
  const [illnessList, setIllnessList] = useState([]);
  let refresh = false;

  //Method to get the illnesses from the API
  const loadIllnesses = async () => {
    const response = await dataSource.get('/sicknesses');
    setIllnessList(response.data);
  }

  useEffect(() => {
    loadIllnesses();
 }, [refresh])

 console.log('illnessList', illnessList);

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
