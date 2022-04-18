import { makeStyles } from '@mui/styles';

export const useStylesNavbar = makeStyles(() => ({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    logo: {
        width: '40px',
    },
    typography: {
        color: 'black',
    }
}));

export const useStyleTracklistCard = makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px',
        background: 'linear-gradient(  0deg, rgba(0,0,0,1) 7%, rgba(30,22,57,1) 88%, rgba(50,35,97,1) 96%, rgba(66,48,128,1) 100%)',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardMedia: {
        width: '50px',
    },
    selectButton: {
        "&.MuiButton-root": {
            borderRadius: "30px"
        },
        "&.MuiButton-contained": {
            backgroundColor: "#1db954",
            textTransform: 'lowercase',
            maxWidth: '100px',
            "&:hover": {
                backgroundColor: 'white',
                border: '1px solid #1db954',
                color: '#1db954'
            }
        },

    }
}))