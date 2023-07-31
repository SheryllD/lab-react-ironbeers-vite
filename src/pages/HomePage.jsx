//function HomePage() {}
//import React, { useEffect, useState} from "react"; -you don't need it in the newer versions
import beersImage from "../assets/beers.png"; 
import RandomBeer from "../assets/random-beer.png"; 
import NewBeer from "../assests/new-beer.png"; 

import { Link} from "react-router-dom";

function HomePage() {
    return (
        <>
          <div className="HomePageContainer" >
          <img src={beersImage} alt= "All Beers" />
          <h1>
            <Link to="/beers">All Beers</Link>
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img src={RandomBeer} alt= "Random Beers" />
          <h1>
            <Link to="/random-beer">All Beers</Link>
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img src={NewBeer} alt= "New Beers" />
          <h1>
            <Link to="/new-beer"></Link>
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
            </div>  
        </>
    );
}
export default HomePage;
/*
const HomePage = () => {
    return (
        <>
       // here the link 
        <img src={`${assets.beers}.png`} />
     <h1>All Beers</h1>
     <p> here text? </p>
        
        </>
    )
}
*/ 


