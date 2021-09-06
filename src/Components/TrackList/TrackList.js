import './TrackList.css';
import Track from '../Track/Track';

const TrackList = (props) => {

    const tracksItems = props.tracks.map(track => <li key={track.id}><Track track={track} onAdd={props.onAdd}/></li>);
    return (
        <div className="TrackList">
            <ul>{tracksItems}</ul>
        </div>
    );

}

export default TrackList;

