import React from "react"

const TrackListCard = (props) => {
    const data = props.value;
    return (
        <React.Fragment>
            <div className="song-container">
                <img src={data.album.images[0].url} alt="#" />
                <h4 className="title">{data.name}</h4>
                <p className="artist">{data.artists[0].name}</p>
                <p className="album">
                    {data.album.name}
                </p>
                <p className="year"> {data.album.release_date.slice(0, 4)}</p>
                <button className="button-select">Select</button>
            </div>
        </React.Fragment>
    )
}

export default TrackListCard;