import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    countdown: {
        fontSize: '30px !important',
        margin: '20px 0 !important'
    }
}));

function Countdown() {
    const classes = useStyles();
    return <Typography className={classes.countdown} variant='h2'>10 days left!</Typography>
}

export default Countdown;