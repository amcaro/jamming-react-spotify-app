import './Track.css';

function Track(props) {

    const renderAction = () => {
      let buttonSign = <button className="Track-action" onClick={addTrack}>+</button>;
      if(props.isRemoval) {
        buttonSign = <button className="Track-action">-</button>;
      }

      return buttonSign;
    }

    const addTrack = () => {
      props.onAdd(props.track)
    }

    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
          </div>
          {renderAction()}
      </div>
    );
}

export default Track;