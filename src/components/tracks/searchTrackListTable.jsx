import React from "react";
const SearchTrackListTable = ({ value, input , isSubmit}) => {
    
    const datalength = value.length;
    const searchInputLength = input.length;
    const trackData = value;

    const column = [
        { heading: '#' },
        { heading: 'TITLE' },
        { heading: 'ALBUM' },
        { heading: 'YEAR' },
        { heading: '' }
    ]

    return (
        <React.Fragment>
                    <h3 className={
                        searchInputLength > 0 && datalength === 0 && isSubmit === true 
                        ? 'not-found-show' 
                        : 'not-found'
                    }>
                        No Result Found for '{input}'
                    </h3>
                    <p className={
                        searchInputLength > 0 && datalength === 0 && isSubmit === true 
                        ? 'not-found-show' 
                        : 'not-found'
                    }>
                        Please make sure your words are spelled correctly or use less or different keywords
                    </p>
                    <div className={datalength === 0 ? 'tracklist-table-none' : 'tracklist-table'}>
                        <h1>Search Result</h1>
                        <table>
                            <thead>
                                <tr>
                                    {column.map((element) => <TableHeadItem item={element} key={element.id} />)}
                                </tr>
                            </thead>
                            <tbody>
                                {trackData.map((element, index) => <TableBodyItem item={element} index={index} key={element.id} />)}
                            </tbody>
                        </table>
                    </div>
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
                        <img src={item.album.images[0].url} alt="#"></img>
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

export default SearchTrackListTable;