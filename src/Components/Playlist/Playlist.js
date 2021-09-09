import './Playlist.css'
import TrackList from '../TrackList/TrackList';

function PlayList(props) {

    const changeHandler = (e) => {
        props.setName(e.target.value);
    }

    const clickHandler = () => {
        props.onSave();
        props.setName('New Playlist')
    }

    return (
        <div className="Playlist">
            <input type="text" name="playlist" value={props.name} onChange={changeHandler}/>
            <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={clickHandler}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;