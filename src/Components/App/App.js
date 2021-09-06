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
  const [playlistName, setPlaylistName] = useState('Relax');
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: 'Soothing', artist: 'John', album: 'Soothing sounds', id: 4},
    { name: 'Water Flow', artist: 'Earth', album: 'Earth sounds', id: 5},
    { name: 'Fire', artist: 'Volcano', album: 'Fire sounds', id: 6}
  ]);

  const addTrack = (track) => {
    let inPlaylist = false;
    
    for (const pTrack of playlistTracks) {
      if(pTrack.id === track.id) {
        inPlaylist = true;
        break;
      }
    }
    
    if(!inPlaylist) {
      setPlaylistTracks([...playlistTracks, track]);
    }
    
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(pTrack => pTrack.id !== track.id));
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <PlayList name={playlistName} tracks={playlistTracks} onRemove={removeTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;
