import "./App.css";
import React, { useState } from "react"; //I2
import HomePage from "./pages/HomePage"; //I2
import { Route, Routes } from 'react-router-dom' // I2: add the route
import AllBeersPage from "./pages/AllBeersPage"; 
import RandomBeer from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage"; 
import BeerDetailsPage from "./pages/BeerDetailsPage"; 

function App () {
  //const [AllBeers, setAllBeers] = useState([]);   
  //const [RandomBeers, setRandomBeers] = useState([]);   
  //const [NewBeer, setNewBeer] = useState([]);   
  
  return (
    <>
    <nav> 
    <Routes>
        <Route path="/" element= {<HomePage/>}  /> //I1
        <Route path="/Allbeers" element= {<AllBeersPage/>}  /> //I1
        <Route path="/add-beer" element= {<AddBeerPage/>}  /> 
        <Route path="/random-beer" element= {<RandomBeerPage/>}  /> 
        <Route path="/beers/:beerId" element= {<BeerDetailsPage/>}  /> 
        </Routes>
    </nav>
    </>
  );
}

export default App;


/*
*/