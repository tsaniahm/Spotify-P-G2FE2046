import React from "react"
import { Card, Grid, Box, CardContent, Typography, CardMedia, Button, Skeleton } from "@mui/material";
import { useStyleTracklistCard } from "../../styles/styles";

const TrackListCard = ({ imageUrl, title, singer, value, selectedTracks, setSelectedTracks }) => {
    const style = useStyleTracklistCard();
    const data = value;
    console.log(value)

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

    const loading = false;

    return (
        <React.Fragment>
            <Grid item md={6} xs={12}>
                <Card className={style.card}>
                    {loading ? (
                       <Skeleton variant="rectangular" width={210} height={118} />
                    ) : (
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="cover"
                        className={style.cardMedia}
                    />) }
                    <Box>
                        <CardContent className={style.cardContent}>
                            <Typography component="div" variant="h5" color='white'>
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="white" component="div">
                                {singer}
                            </Typography>
                            <Button
                                size="medium"
                                variant="contained"
                                color="success"
                                className={style.selectButton}
                                onClick={handleSelectTrack}
                            >
                                {handleTextButton()}
                            </Button>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </React.Fragment>
    )
}

export default TrackListCard;