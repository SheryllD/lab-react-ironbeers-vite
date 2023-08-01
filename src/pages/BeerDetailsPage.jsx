import { useEffect } from "react";
import { useParams } from "react-router-dom";


function BeerDetailsPage() {
    const { beerId } = useParams()
   console.log("here is the params", beerId); 

   useEffect(() => {
    const fetchAllBeers = async () => {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/${beerId}')
        if(response.status === 200) {
            const parsed = await response.json();
            setSingleBeer(parsed)
        } 
    };
    fetchAllBeers();
   },[beerId]);
   if (!singleBeer) { 
    return <p>Loading...</p>; 
   }
    return(
        
    )
}

export default BeerDetailsPage;
