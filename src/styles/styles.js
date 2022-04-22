import { makeStyles } from '@mui/styles';
import { theme } from './theme';

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
        alignItems: 'center',
        padding: '10px',
        background: 'linear-gradient(  0deg, rgba(0,0,0,1) 7%, rgba(30,22,57,1) 88%, rgba(50,35,97,1) 96%, rgba(66,48,128,1) 100%)',
        [theme.breakpoints.down('sm')]: {
            padding: '5px 10px',
            minHeight: '115px'
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            minHeight: '100px',
        }
    },
    cardMedia: {
        maxWidth: '180px',
        borderRadius: '10px',
        "&.MuiCardMedia-img": {
            [theme.breakpoints.down('sm')]: {
                maxWidth: '110px',
                maxHeight: '110px',
            }
        }
    },
    selectButton: {
        "&.MuiButton-root": {
            borderRadius: "30px",
            marginTop: '10px',
            [theme.breakpoints.down('sm')]: {
                marginTop: '3px',
            }
        },
        "&.MuiButton-contained": {
            backgroundColor: "#1db954",
            textTransform: 'lowercase',
            width: '100px',
            "&:hover": {
                backgroundColor: 'white',
                border: '1px solid #1db954',
                color: '#1db954'
            }
        },

    }
}))

export const useStyleLandingPage = makeStyles((theme) => ({
    h1: {
        '&.MuiTypography-root': {
            marginLeft: '70px',
            marginRight: '450px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('md')]: {
            '&.MuiTypography-root': {
                fontSize: '60px',
                marginLeft: '50px',
                marginRight: '150px',
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&.MuiTypography-root': {
                fontSize: '40px',
                textAlign: 'center',
                margin: '10px',
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
                marginLeft: '50px',
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
                marginLeft: '50px',
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

export const useStyleSearchInput = makeStyles(() => ({
    textField: {
        borderRadius: '30px',
        background: 'white',
        padding: '0 40px',
        width: '50%',
        "&.MuiTextField-root": {
            marginRight: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            "&.MuiTextField-root": {
                marginBottom: '10px',
                marginRight: '5px',
            },
        }
    },
    button: {
        "&.MuiButton-root": {
            borderRadius: "30px",
            padding: '10px 40px',
            [theme.breakpoints.down('sm')]: {
                padding: '13px 0px',
            }
        },
        "&.MuiButton-contained": {
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#1db954',
            border: 'none',
            borderRadius: '30px',
        },
    },
    createButton: {
        "&.MuiButton-contained": {
            borderRadius: '30px',
            border: '2px solid black',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            "&:hover": {
                backgroundColor: 'white',
                color: '#1db954'
            }
        },
    },
    subtitle: {
        "&.MuiTypography-subtitle1": {
            color: 'white',
            marginLeft: '10px'
        },
        "&.MuiTypography-subtitle2": {
            color: 'white',
            marginLeft: '10px',
        }
    },

}))


export const useStyleCreatePlaylist = makeStyles((theme) => ({
    box: {
        background: 'linear-gradient(0deg, rgba(0,0,0,1) 7%, rgba(30,22,57,1) 88%, rgba(50,35,97,1) 96%, rgba(66,48,128,1) 100%)',
        color: 'white',
        width: '40%',
        padding: '15px 15px 40px 15px',
        borderRadius: '15px',
        [theme.breakpoints.down('md')]: {
            width: '80%',
        }
    },
    title: {
        textAlign: 'center',
        '&.MuiTypography-root': {
            fontWeight: 'bold',
            marginBottom: '40px'
        }
    }
}))