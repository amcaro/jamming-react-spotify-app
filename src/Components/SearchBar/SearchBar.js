import './SearchBar.css';
import { useState } from 'react';

function SearchBar(props) {

    const [term, setTerm] = useState('');

    const search = (term) => {
        props.onSearch(term);
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    }

    const handleClick = () => {
        search(term);
    }

    return (
        <div className="SearchBar">
            <input placeholder="Search a track" onChange={handleTermChange} value={term}/>
            <button className="SearchButton" onClick={handleClick}>SEARCH</button>
        </div>
    );
}

export default SearchBar;