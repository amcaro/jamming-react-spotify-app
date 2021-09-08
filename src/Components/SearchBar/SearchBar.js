import './SearchBar.css';
import { useState } from 'react';

function SearchBar(props) {

    const [term, setTerm] = useState('');

    const search = (term) => {
        props.onSearch(term);
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value);
        search(term);
    }

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} value={term}/>
            <button className="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;