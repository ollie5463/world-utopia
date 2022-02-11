import { IconButton, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Instagram, Twitter } from '@mui/icons-material';
import { useCallback } from 'react';

const useStyles: any = makeStyles((theme: any) => ({
    icon: {
        color: 'white'
    },
    discord: {
        maxWidth: '40px',
        maxHeight: '40px'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '60%',
        margin: '14px auto'
    }
  }));

function SocialMedia() {
    const classes = useStyles();
    const onClick = useCallback(() => {
        window.open('https://www.instagram.com/olliebannister/');
    }, [])

    return (
        <Grid className={classes.container}>
            <IconButton onClick={onClick}>
                <Instagram className={classes.icon} fontSize='large'/>
            </IconButton>
            <IconButton onClick={onClick}>
                <Twitter className={classes.icon} fontSize='large'/>
            </IconButton>
            <IconButton onClick={onClick}>
                <img className={classes.discord} alt='discord button' src='discord.png'></img>
            </IconButton>
        </Grid>
    )
}

export default SocialMedia;