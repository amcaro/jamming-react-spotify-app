import logo from './logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import '../SearchResults/SearchResults';
import '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';


function App() {
  
  
  return (
    <div>
      <h1><span className="highlight">Jamming</span></h1>
      <div className="App">
        <!-- <SearchBar /> -->
        <div className="App-playlist">
          <!-- <SearchResults /> -->
          <!-- <PlayList /> -->
        </div>
      </div>
    </div>
  );
}

export default App;
