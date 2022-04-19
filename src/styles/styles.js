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
        maxWidth: '180px',
        borderRadius: '10px',
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

export const useStyleHomepage = makeStyles((theme) => ({
    h1: {
        '&.MuiTypography-root': {
            marginLeft: '70px',
            marginRight: '450px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('md')]: {
            '&.MuiTypography-root': {
                fontSize: '60px',
                marginLeft: '20px',
                marginRight: '150px',
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&.MuiTypography-root': {
                fontSize: '40px',
                textAlign: 'center',
                margin: 0,
            }
        },
    },
    p: {
        '&.MuiTypography-root': {
            marginLeft: '70px',
            marginRight: '450px',
            marginTop: '10px',
            fontSize: '20px',
        },
        [theme.breakpoints.down('md')]: {
            '&.MuiTypography-root': {
                fontSize: '15px',
                marginLeft: '20px',
                marginRight: '150px',
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&.MuiTypography-root': {
                fontSize: '13px',
                textAlign: 'center',
                margin: '10px',
            }
        },
    },
    button: {
        "&.MuiButton-root": {
            borderRadius: "30px",
            marginLeft: '70px',
            marginTop: '30px',
        },
        "&.MuiButton-contained": {
            padding: '10px 10px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#1db954',
            border: 'none',
            borderRadius: '30px',
            width: '20%'
        },
        [theme.breakpoints.down('md')]: {
            "&.MuiButton-root": {
                marginLeft: '20px',
            },
        },
        [theme.breakpoints.down('sm')]: {
            "&.MuiButton-root": {
                margin: '20px auto',
                width: '60%'
            },
        }

    }
}))