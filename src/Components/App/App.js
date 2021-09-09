import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';
import {useState, useEffect} from 'react';
import spotify from '../../util/Spotify';


function App(props) {
  
  const [searchResults, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    spotify.getAccessToken();
    Notification.requestPermission();
  }, []);

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

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistTracks([]);
  }

  const search = (term) => {
    spotify.search(term).then(results => {
      setResults(results);
    })
    .catch(err => {
      console.log(err);
    });
    
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <PlayList name={playlistName} 
                    tracks={playlistTracks} 
                    onRemove={removeTrack} 
                    setName={setPlaylistName}
                    onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
