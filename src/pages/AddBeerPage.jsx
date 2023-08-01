import { Link} from "react-router-dom";

function AddBeerPage() {
    const [name, setName] = useState('')
    const [tagline, setTaglie] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState('')
    const [contributed_by, setContributed_by] = useState('')
    const [name, setName] = useState('')
    return(
    <form> 
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="tagline"/>
        <input type="text" placeholder="description"/>
        <input type="text" placeholder="brewer's tips"/>
        <input type="text" placeholder="attenuation"/>
        <input type="text" placeholder="contributed by"/>
        <button type="submit">Create Beer</button>
    </form>
    );
}

export default AddBeerPage;
