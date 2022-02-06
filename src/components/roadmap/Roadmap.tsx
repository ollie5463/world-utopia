import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
    worldUtopiaRoadmap: {
        textAlign: 'center'
    },
    roadmapItemContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex !important',
        margin: '40px 0px',
        flexWrap: 'wrap'
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
        padding: '0 !important'
    },
    roadMapText: {
        maxWidth: '400px'
    },
    roadMapContainer: {
        margin: '100px 0 !important',
        minWidth: '1100px !important',
        maxWidth: '1100px !important'
    }
  }));

const getRoadMapItem = (classes: any, text: string, number: number) => {
    const isOdd = number % 2;
    return (
        <Container className={classes.roadmapItemContainer} sx={{ flexDirection: isOdd? 'row': 'row-reverse' }}>
            <Container className={classes.number} sx={{ marginLeft: isOdd ? 'auto' : '40px', marginRight: isOdd ? '40px' : 'auto' }} >{number}</Container>
            <Typography className={classes.roadMapText} variant='body1'>{text}</Typography>
        </Container>
    )
}

function Roadmap() {
    const classes = useStyles();
    const roadMapItems = [
        "The roadmap is iterative, but we're building on Ethereum and the SBOC community is at the center. As we grow, we will decentralize.",
        "November 30 (Giving Tuesday in the US.) We auction 10 special Seabum NFTs with 100% of proceeds to Ocean Conservancy.",
        "December 5: Mint day for 10,000 randomly generated Seabums NFTs. 20% of proceeds via the contract to Ocean Conservancy.",
        "Donate 3% of secondary market sales to Ocean Conservancy in perpetuity."
]
    return (
        <Container className={classes.roadMapContainer}>
            <Typography className={classes.worldUtopiaRoadmap} variant='h2' id='Roadmap'>World Utopia roadmap</Typography>
            {roadMapItems.map((item, index) => 
                getRoadMapItem(classes, item, ++index)
            )}
        </Container>
    )
}

export default Roadmap;