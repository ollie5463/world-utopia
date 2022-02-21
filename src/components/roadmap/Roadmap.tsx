import { Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Line from './Line';

const useStyles: any = makeStyles((theme: any) => ({
    worldUtopiaRoadmap: {
        textAlign: 'center',
        [theme.breakpoints.down('md')]:{
            fontSize: '45px',
            margin: '40px 0'
        },
    },
    roadmapItemContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex !important',
        margin: '60px 0px',
        flexWrap: 'wrap',
        maxWidth: 'unset',
        [theme.breakpoints.down('roadMapMaxWidthDesktop')]: {
            flexDirection: 'column',
            margin: '60px 0px'

        }
    },
    number: {
        lineHeight: '41px',
        maxWidth: '50px !important',
        maxHeight: '42px !important',
        background: '#f3e74c',
        color: 'black',
        textAlign: 'center',
        borderRadius: '33px',
        fontSize: '30px',
        padding: '0 !important',
        [theme.breakpoints.down('roadMapMaxWidthDesktop')]: {
            margin: '20px auto'
        }
    },
    roadMapContainer: {
        [theme.breakpoints.up('md')]: {
            margin: '100px 0 !important'
        }
    },
    roadMapHeading: {
        marginRight: 'auto',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px'
        }
    },
    roadMapHeadingContainer: {
        padding: 0,
        [theme.breakpoints.down('roadMapMaxWidthDesktop')]: {
            flexDirection: 'column',
            maxWidth: '650px'
        },
        
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: 0
    }
  }));

const getRoadMapItem = (classes: any, title: string, text: string, number: number) => {
    const isOdd = number % 2;
    return (
        <Container key={title} className={classes.roadmapItemContainer} sx={{ flexDirection: !isOdd? 'row': 'row-reverse' }}>
            <Container className={classes.number} sx={{ marginLeft: !isOdd ? 'auto' : '40px', marginRight: !isOdd ? '40px' : 'auto' }} >{number}</Container>
            <Container className={classes.roadMapHeadingContainer}>
                <Typography className={classes.roadMapHeading} variant='h3'>{title}</Typography>
                <Typography className={classes.roadMapText} variant='body1'>{text}</Typography>
            </Container>
        </Container>
    )
}

function Roadmap({ isDesktop }: { isDesktop: boolean } ) {
    const classes = useStyles();
    const roadMapItems = [
        {title: 'WELCOME TO WORLD UTOPIA', text: "As the name suggests we are here with the vision to create a better future. Our goal is to spread global awareness through our NFT project and work alongside credible non-profit organizations to improve our way of living. We can all relate/contribute to these issues, and our purpose is to be able to educate our community and act as a continuous support in building what we like to call a ‘better future’. We want to be able to release 10 total NFT projects all related to a specific global issue with 20% of initial sales & a further 5% of royalties to be donated to a charity relating to that issue. The first drop will consist of 10,000 NFTs all with unique characteristics and will connect us with the Ocean(Add in a statistic). "},
        {title: 'Giveaway', text: "Join our discord and unite our world as one. Once we reach 15,000 discord members we will raffle out 10 world utopia NFTs offering the chance to be an early member & be guaranteed onto the whitelist (How many spots on the list) for the launch."},
        {title: 'Live Minting will commence', text: "Live Minting will commence. Just before the public sale we will have the site open to our whitelist members. After we will reveal all 10,000 World Utopia NFTs - make sure to check out our rarity scale live on our website to see if you are one of the lucky individuals to collect one of our legendary NFTs. All holders of 10 or more World Utopia NFTs will have the chance to win a limited edition 1 of 1 design. 9990 NFTs with 10 limited edition NFTs in this chance."},
        {title: 'Build and share', text: "We will continue to build our community & share our donations through all social media platforms."},
        {title: 'Exclusive', text: "Keep a lookout for future announcements that include ‘Holders exclusive store’ on our website where holders will be able to purchase sustainable/environmentally friendly merch"},
        {title: 'Make a difference', text: "Our last step is that we want our members to have visibility of these global issues first hand so we will consistently share progress updates & how our donations are really making a difference. (Videos shared in the MetaVerse/ On website)."}
]
    return (
        <Grid className={classes.roadMapContainer}>
            <Typography className={classes.worldUtopiaRoadmap} variant='h2' id='Roadmap'>World Utopia roadmap</Typography>
            <Grid>
                {isDesktop && <Line />}
                {roadMapItems.map(({title, text}, index) => 
                    getRoadMapItem(classes, title, text, ++index)
                )}
            </Grid>
        </Grid>
    )
}

export default Roadmap;