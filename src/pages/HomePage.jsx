import React from "react";
import "../App.css"; 
import { Link } from "react-router-dom";
//import beersImage from "../assets/beers.png" 
//import randomBeerImage from "../assets/random-beer.png"; 
//import newBeerImage from "../assests/new-beer.png"; 

function HomePage() {
    return (
        <>
         <div className="HomePageContainer">
            {/*<img src={beersImage} alt= "All Beers " />*/}
            <Link to={"/beers"}>
                <h2>All Beers</h2>
          <p> Lorem ipsum dolor.</p>
          </Link>
            </div>  
         
         <div className="HomePageContainer">
         {/*<img src={randomBeerImage} alt= "All Beers " />*/}
         <Link to={"/random-beer"}>
             <h2>Random Beer</h2>
       <p> Lorem ipsum dolor.</p>
       </Link>
         </div>    

         <div className="HomePageContainer">
         {/*<img src={newBeerImage} alt= "New Beer Image " />*/}
         <Link to={"/new-beer"}>
             <h2>Random Beer</h2>
       <p> Lorem ipsum dolor.</p>
       </Link>
         </div>  
         </>
    );
}
export default HomePage;



