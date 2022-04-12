import React from "react"
import styles from '../../styles/style.module.css'

const TrackListCard = ({ value, selectedTracks, setSelectedTracks }) => {
    const data = value;

    const handleTextButton = () => {
        const found = selectedTracks.findIndex((e) => e.uri === data.uri)
        if (found !== -1) {
            return 'Deselect'
        } else {
            return 'Select'
        }
    }

    const handleSelectTrack = () => {
        const found = selectedTracks.findIndex((e) => e.uri === data.uri)

        if (found > -1) {
            const newSelectedTracks = selectedTracks.filter((e) => e.uri !== data.uri)
            setSelectedTracks(newSelectedTracks)
        } else {
            const newSelectedTracks = [...selectedTracks, data]
            setSelectedTracks(newSelectedTracks)
        }
    }

    return (
        <React.Fragment>
            <div className={styles.songContainer}>
                <div className={styles.imageSongContainer}>
                    <img src={data.album.images[0].url} alt="#" />
                </div>
                <div className={styles.titleSongContainer}>
                    <h4 className={styles.title}>{data.name}</h4>
                    <p className={styles.artist}>{data.artists[0].name}</p>
                    <p className={styles.album}>{data.album.name}</p>
                    <p className={styles.year}> {data.album.release_date.slice(0, 4)}</p>
                    <button className={styles.buttonSelect} onClick={handleSelectTrack}>
                        {handleTextButton()}
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TrackListCard;