import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import OurVisionFacts from '../ourVisionFacts/OurVisionFacts';
import VisionList from '../VisionList';

const useStyles: any = makeStyles((theme: any) => ({
    ourVision: {
        fontWeight: 'bold !important',
        fontSize: '30px !important',
        textAlign: 'center',
        padding: '12px'
    },
    ourVisionContainer: {
        marginLeft: '0 !important',
        maxWidth: '450px !important',
        margin: '20px 0'
    },
    innerContainer: {
        padding: '0 !important',
        background: 'darkblue',
        borderRadius: '34px'
    }
}));

function OurVision() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.ourVisionContainer}>
                <Container className={classes.innerContainer}>
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
                <OurVisionFacts/>
            </Container>
        </>
    )
}
export default OurVision;