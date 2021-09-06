import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';
import {useState} from 'react';


function App(props) {
  
  const [searchResults, setResults] = useState([
    { name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water', id: 1},
    { name: 'Tiny Dancer', artist: 'Tim McGraw', album: 'Love Story', id: 2},
    { name: 'Tiny Dancer', artist: 'Rockabye Baby!', album: 'Lullaby Renditions of Elton John', id: 3}
  ]);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
