import React from "react"

const AlbumList = (props) => {
    const data = props.value;
    return (
        <React.Fragment>
            <div className="song-container">
                <img src={data.album.images[0].url} alt="#" />
                <h3 className="title">{data.album.name}</h3>
                <p className="artist">{data.artists[0].name}</p>
                <p className="album">
                    {data.album.name}
                </p>
                <p className="year"> {data.album.release_date.slice(0, 4)}</p>
                <button className="button-play">Select</button>
            </div>
        </React.Fragment>
    )
}

export default AlbumList;