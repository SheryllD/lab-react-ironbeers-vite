import axios from "axios";
import { useState } from "react";
function RandomBeersPage() {
    const [RandomBeer, setRandomBeer] = useState({})

    const getRandomBeer = async() => {
        try {
            const response =await axios.get('https://ih-beers-api2.herokuapp.com/beers/random'
            ); 
            if (response.status === 2000) {
                setRandomBeer(response.data); 
            }
            } catch (err)
    }
}

export default RandomBeersPage;
