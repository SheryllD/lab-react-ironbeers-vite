import {useEffect, useState} from "react"; 
import { Link } from "react-router-dom";
//import axios from "axios"; 

function AllBeersPage() {
const [allBeers, setAllBeers] = useState([]); 
const fetchAllBeers = async (setter) => {
    const response = await fetch (`https://ih-beers-api2.herokuapp.com/beers`); 
  
    if (response.status === 200) {
        const beers = await response.json();
        setter(beers);
    }
}; 

useEffect(() => {
    fetchAllBeers (setAllBeers); 
}, [])

return allBeers ? (
    <div className="beer-container">
      {allBeers.map((beer) => {
        return (
          <>
            <Link to={`/beers/${beer._id}`} key={beer._id}>
              <div className="beerOverview">
                <div>
                  <img style={{width: '100px'}} src={beer.image_url} className="beer-img" />
                </div>
                <div className="beer-information">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <h5>Contributed by: {beer.contributed_by}</h5>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
export default AllBeersPage;

