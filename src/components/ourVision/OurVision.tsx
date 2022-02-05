import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import OurVisionFacts from '../ourVisionFacts/OurVisionFacts';
import VisionList from '../VisionList';

const useStyles: any = makeStyles((theme: any) => ({
    ourVision: {
        textAlign: 'center',
        padding: '12px'
    },
    ourVisionContainer: {
        display: 'flex !important',
        marginLeft: '0 !important',
        margin: '60px 0'
    },
    innerContainer: {
        maxWidth: '450px !important',
        padding: '0 !important',
        background: 'darkblue',
        borderRadius: '34px'
    },
    visionItemsContainer: {
        display: 'flex !important',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        maxWidth: '465px !important',
        minWidth: '465px !important'
    }
}));

type Props = {
    isDesktop: boolean
}

function OurVision({ isDesktop }: Props) {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.ourVisionContainer}>
                <Container className={classes.innerContainer}>
                    <Typography id='Vision' className={classes.ourVision} variant='h2'>
                        Our Vision
                    </Typography>
                    <VisionList items={[
                        'Public mint still open at .04 ETH', 
                        '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)',
                        'Public mint still open at .04 ETH', 
                        '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)'
                    ]} />
                </Container>
                <Container className={classes.visionItemsContainer}>
                {isDesktop && 
                    <OurVisionFacts facts={[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
                        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
                        'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                    ]}/>
                }
                </Container>
            </Container>
        </>
    )
}
export default OurVision;