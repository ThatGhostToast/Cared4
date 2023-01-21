import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dataSource from "./dataSource";
import Home from './Pages/Home';
import About from "./Pages/About";
import './Styles/App.css';

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
      </Routes>
    </Router>
  );
}

export default App;
