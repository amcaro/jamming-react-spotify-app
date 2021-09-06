import './Playlist.css'
import '../TrackList/TrackList'

function PlayList() {
    return (
        <div className="Playlist">
            <input defaultValue="{'New Playlist'}" />
            <!-- <TrackList /> -->
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;