import { useCallback } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    openDiscord: {
        margin: '10px 0 !important',
        fontSize: '60px',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px'
        },
        background: 'black',
        color: 'white',
        maxWidth: '80vw'
    }
}));

function JoinDiscord() {
    const classes = useStyles();

    const openDiscord = useCallback(() => {
        window.open('https://discord.gg/5A58pHtR');
    }, [])

    return (
        <Button id='minting' className={classes.openDiscord} variant="contained" onClick={openDiscord} >Join our Discord!</Button>   
    )
}

export default JoinDiscord;