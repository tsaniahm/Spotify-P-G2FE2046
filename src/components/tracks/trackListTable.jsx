import React from "react";
const TrackListTable = (albumsData) => {
    
    const trackData = albumsData.value;

    const column = [
        { heading: '#' },
        { heading: 'TITLE' },
        { heading: 'ALBUM' },
        { heading: 'YEAR' },
        { heading: '' }
    ]

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        {column.map((element) => <TableHeadItem item={element} key={element.id} />)}
                    </tr>
                </thead>
                <tbody>
                    {trackData.map((element, index) => <TableBodyItem item={element} index={index} key={element.id}/>)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableBodyItem = ({ item, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="track-title">
                    <div className="track-image">
                        <img src={item.album.images[0].url}></img>
                    </div>
                    <div className="title-and-artist">
                        <p>{item.name}</p>
                        <p className="artist">{item.artists[0].name}</p>
                    </div>
                </div>
            </td>
            <td>{item.album.name}</td>
            <td>{item.album.release_date.slice(0, 4)}</td>
            <td><button className="button-play">Play</button></td>
        </tr>
    )
};

export default TrackListTable;