import './Track.css';

function Track(props) {

    const renderAction = () => {
      let buttonSign = <button className="track-action">+</button>
      if(props.isRemoval) {
        buttonSign = <button className="track-action">-</button>;
      }

      return buttonSign;
    }
    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
          </div>
          <button className="Track-action">{renderAction}</button>
      </div>
    );
}

export default Track;