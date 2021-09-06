import './Playlist.css'
import TrackList from '../TrackList/TrackList';

function PlayList(props) {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;