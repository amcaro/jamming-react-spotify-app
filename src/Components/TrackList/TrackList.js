import '.TrackList.css';

const TrackList = () => {
    const tracks = ['Hello', 'Fuck You', 'Beautiful Day'];
    const tracksItems = tracks.map(track => <li>{track}</li>);
    return (
        <div className="TrackList">
            <ul>{tracksItems}</ul>
        </div>
    );

}

export default TrackList;

