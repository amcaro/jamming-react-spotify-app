import './Track.css';

function Track() {

    const renderAction = () => {
      let buttonSign = '+';
      if(this.props.isRemoval) {
        buttonSign = '-';
      }

      return buttonSign;
    }
    return (
        <div className="Track">
          <div className="Track-information">
            <h3><!-- track name will go here --></h3>
            <p><!-- track artist will go here--> | <!-- track album will go here --></p>
          </div>
          <button className="Track-action">{renderAction}</button>
      </div>
    );
}

export default Track;