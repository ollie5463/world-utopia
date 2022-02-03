import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CountdownTimer from "react-countdown";

const useStyles: any = makeStyles((theme: any) => ({
    countdown: {
        fontSize: '30px !important',
        margin: '20px 0 !important'
    }
}));

function Countdown() {
    const classes = useStyles();
    // return <Typography className={classes.countdown} variant='h2'>10 days left!</Typography>
    return (
        <Typography className={classes.countdown} variant='h2'>
            <CountdownTimer date={Date.now() + 10000000000} />
        </Typography>
    )
}

export default Countdown;