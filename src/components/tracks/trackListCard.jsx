import React from "react"
import { useSearchResult } from "../../context/selectedTrackContext";

const TrackListCard = (props) => {
    const data = props.value;
    const {selectedTracks, setSelectedTracks} = useSearchResult()
    
    const handleTextButton = () => {
        const found = selectedTracks.findIndex((e) => e.uri === data.uri)
        if (found !== -1) {
            return 'Deselect'
        }else{
             return 'Select'
        }
    }

    const handleSelectTrack = () => {
        const found = selectedTracks.findIndex((e) => e.uri === data.uri)

        if (found > -1) {
            const newSelectedTracks = selectedTracks.filter((e) => e.uri !== data.uri)
            setSelectedTracks(newSelectedTracks)
        } else {
            const newSelectedTracks = [...selectedTracks,data]
            setSelectedTracks(newSelectedTracks)
        }
    }

    return (
        <React.Fragment>
            <div className="song-container">
                <img src={data.album.images[0].url} alt="#" />
                <h4 className="title">{data.name}</h4>
                <p className="artist">{data.artists[0].name}</p>
                <p className="album">{data.album.name}</p>
                <p className="year"> {data.album.release_date.slice(0, 4)}</p>
                <button className="button-select" onClick={handleSelectTrack}>
                    {handleTextButton()}
                </button>
            </div>
        </React.Fragment>
    )
}

export default TrackListCard;