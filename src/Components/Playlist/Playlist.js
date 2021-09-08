import './Playlist.css'
import TrackList from '../TrackList/TrackList';
import { useState } from 'react';

function PlayList(props) {

    const changeHandler = (e) => {
        props.setName(e.target.value)
    }

    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={changeHandler}/>
            <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;