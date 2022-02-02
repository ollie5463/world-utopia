import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VisionList from '../VisionList';

const useStyles: any = makeStyles((theme: any) => ({
    ourVision: {
        fontWeight: 'bold !important',
        fontSize: '30px !important'
    }
}));

function OurVision() {
    const classes = useStyles();

    return (
        <Container>
            <Typography className={classes.ourVision} variant='h2'>
                Our Vision
            </Typography>
            <VisionList items={[
                'Public mint still open at .04 ETH', 
                '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)',
                'Public mint still open at .04 ETH', 
                '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)'
                ]} />
        </Container>
    )
}
export default OurVision;