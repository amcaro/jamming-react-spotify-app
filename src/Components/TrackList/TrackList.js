import './TrackList.css';
import Track from '../Track/Track';

const TrackList = (props) => {

    const tracksItems = props.tracks.map(track => 
        <li key={track.id}>
            <Track track={track} 
                isRemoval={props.isRemoval} 
                onAdd={props.onAdd} 
                onRemove={props.onRemove}
            />
        </li>
    );
    return (
        <div className="TrackList">
            <ul>{tracksItems}</ul>
        </div>
    );

}

export default TrackList;

