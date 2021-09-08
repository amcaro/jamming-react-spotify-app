import './Track.css';

function Track(props) {

    const renderAction = () => {
      let buttonSign = <button className="Track-action" onClick={addTrack}>+</button>;
      if(props.isRemoval) {
        buttonSign = <button className="Track-action" onClick={removeTrack}>-</button>;
      }

      return buttonSign;
    }

    const addTrack = () => {
      props.onAdd(props.track);
    }
    
    const removeTrack = () => {
      props.onRemove(props.track);
    }

    const trackArtists = props.track.artists.map(artist => `${artist.name} `);

    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{props.track.name}</h3>
            <p>{trackArtists} | {props.track.album.name} </p>
          </div>
          {renderAction()}
      </div>
    );
}

export default Track;