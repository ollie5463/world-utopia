import { Container, Typography, Grid } from '@mui/material';
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
        justifyContent: 'space-between',
        marginLeft: '0 !important',
        margin: '100px 0',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column !important'
        }
    },
    innerContainer: {
        maxWidth: '600px !important',
        padding: '0 !important',
        background: '#E7FF00',
        color: '#1D1D1B',
        borderRadius: '34px',
        margin: 0,
        [theme.breakpoints.down('md')]: {
            margin: 'auto'
        }
    },
    visionItemsContainer: {
        display: 'flex !important',
        flexWrap: 'nowrap',
        paddingRight: '0px',
        margin: 0,
        [theme.breakpoints.down('md')]: {
            margin: '50px auto',
            maxWidth: '600px !important',
            padding: '0 !important'
        },
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            maxWidth: '465px !important',
            minWidth: '465px !important'
        },
    }
}));

type Props = {
    isDesktop: boolean
}

function OurVision({ isDesktop }: Props) {
    const classes = useStyles();

    return (
        <Grid className={classes.ourVisionContainer}>
            <Container className={classes.innerContainer}>
                <Typography id='Vision' className={classes.ourVision} variant='h2'>
                    Our Vision
                </Typography>
                <VisionList items={[
                    'As the name suggests we are here with the vision to create a better future. Our goal is to spread global awareness through our NFT project and work alongside credible non-profit organizations to improve our way of living. We can all relate/contribute to these issues, and our purpose is to be able to educate our community and act as a continuous support in building what we like to call a ‘better future’.', 
                    'We want to be able to release 10 total NFT projects all related to a specific global issue with 20% of initial sales & a further 5% of royalties to be donated to a charity relating to that issue. The first drop will consist of 10,000 NFTs all with unique characteristics and will connect us with the Ocean(Add in a statistic).',
                ]} />
            </Container>
            <Container className={classes.visionItemsContainer}>
                <OurVisionFacts facts={[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
                    'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
                    'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                ]}/>
            </Container>
        </Grid>
    )
}
export default OurVision;