import React from "react"
import { useStyleTracklistCard } from "../../styles/styles";
import {
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    CardMedia,
    Button,
    Skeleton,
    useMediaQuery
} from "@mui/material";

const TrackListCard = ({
    imageUrl,
    title,
    singer,
    value,
    selectedTracks,
    setSelectedTracks,
    duration
}: any) => {

    const style = useStyleTracklistCard();
    const matches = useMediaQuery('(max-width:600px)');

    const millisToMinutesAndSeconds = (millis: number) => {
        var minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds}`;
    }
    const minute = millisToMinutesAndSeconds(duration)

    const data = value;

    const handleTextButton = () => {
        const found = selectedTracks.findIndex((e: any) => {
            return e.uri === data.uri;
        })

        if (found !== -1) {
            return 'Deselect'
        } else {
            return 'Select'
        }
    }

    const handleSelectTrack = () => {
        const found = selectedTracks.findIndex((e: any) => {
            return e.uri === data.uri;
        })

        if (found > -1) {
            const newSelectedTracks = selectedTracks.filter((e: any) => e.uri !== data.uri)
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
                        />)}
                    <Box>
                        <CardContent className={style.cardContent}>
                            <Typography variant={matches ? 'caption' : 'subtitle1'} color="white" component="div">
                                {minute}
                            </Typography>
                            <Typography component="div" variant={matches ? 'subtitle2' : 'h5'} color='white' data-testid="tracks-title">
                                {title}
                            </Typography>
                            <Typography variant={matches ? 'caption' : 'subtitle1'} color="white" component="div">
                                {singer}
                            </Typography>
                            <Button
                                size={matches ? 'small' : 'medium'}
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