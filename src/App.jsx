import "./App.css";
import { Route, Routes } from 'react-router-dom' // I2: add the route
import React, { useState } from "react"; //I2
import HomePage from "./pages/HomePage"; //I2
import AllBeersPage from "./pages/AllBeersPage"; 
import RandomBeerPage from "./pages/RandomBeerPage";
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
        <Route path="/beers" element= {<AllBeersPage/>}  /> //I1
        <Route path="/new-beer" element= {<AddBeerPage/>}  /> //I1
        <Route path="/random-beer" element= {<RandomBeerPage/>}  /> //I1
        <Route path="/beers/:beerId" element= {<BeerDetailsPage/>}  /> //I1
        </Routes>
    </nav>
    </>
  );
}

export default App;


/*
*/