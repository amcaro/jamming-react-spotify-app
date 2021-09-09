import './Playlist.css'
import TrackList from '../TrackList/TrackList';

function PlayList(props) {

    const changeHandler = (e) => {
        props.setName(e.target.value);
    }

    return (
        <div className="Playlist">
            <input type="text" name="playlist" defaultValue={'New Playlist'} onChange={changeHandler}/>
            <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;