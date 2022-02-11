import { makeStyles } from "@mui/styles";
import { Typography, Grid } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import Carousel from 'react-material-ui-carousel'

type Item = {
    name: string,
    image: string
}

const useStyles: any = makeStyles((theme: any) => ({
    meetTheTeamTitle: {
        textAlign: 'center',
        margin: '100px 0 !important'
    },
    itemContainer: {
        display: 'flex !important',
        flexDirection: 'column-reverse'
    },
    caption: {
        textAlign: 'center'
    },
    outerContainer: {
        display: 'flex !important',
        maxWidth: 'none !important',
        margin: '100px 0'
    },
    innerContainer: {
        display: 'flex !important',
        maxWidth: 'none !important'
    },
    teamGrid: {
        justifyContent: 'space-between'
    },
    carousel: {
        overflow: 'unset',
        display: 'flex',
        flexDirection: 'column',
        '& .carousel .thumbs-wrapper.axis-vertical': {
            margin: 0,
            width: '100vw'
        }
    },
    grid: {
        display: 'flex'
    }
  }));

const getItemCarouselItem = (name: string, image: string, classes: any) => {
    return (
        <Grid key={name} flexDirection='column-reverse' className={classes.itemContainer}>
            <Typography className={classes.caption} variant='caption'>{name}</Typography>
            <img style={{ maxHeight: '250px', maxWidth: '250px' }}src={image} alt={name} />
        </Grid>
    )
}
const getItemCarouselItemMobile = (name: string, image: string, classes: any) => {
    return (
        <Grid className={classes.grid} key={name}>
            {/* <Typography className={classes.caption} variant='caption'>{name}</Typography> */}
            <img style={{ maxHeight: '250px', maxWidth: '250px' }}src={image} alt={name} />
        </Grid>
    )
}

function MeetTheTeam({ isDesktop }: {isDesktop: boolean}) {
    const classes = useStyles();

    const items: Item[] = [{
        name: 'Ollie',
        image: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193476a64b7ed0f2f0bd0f4_Untitled-1.png'
    }, {
        name: 'Joe',
        image: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61934af77a6e4037059e5cf8_02.png'
    }, {
        name: 'Baiden',
        image: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193533234b645cee58f1e77_03.png'
    }, {
        name: 'Lew',
        image: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png'
    }, {
        name: 'Max',
        image: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png'
    }]

    return (
        <Grid flexDirection='column' className={classes.outerContainer}>
            <Typography className={classes.meetTheTeamTitle} variant='h2' id='TheTeam'>Meet the team!</Typography>
            {!isDesktop && <Carousel centerMode className={classes.carousel}>
                {items.map((itemProps) => 
                    getItemCarouselItemMobile(itemProps.name, itemProps.image, classes)
                )}
            </Carousel>}
            <Grid className={classes.teamGrid} container>
                {isDesktop && 
                    items.map((itemProps) => 
                        getItemCarouselItem(itemProps.name, itemProps.image, classes)    
                    )
                }
            </Grid>
        </Grid>
    )
}

export default MeetTheTeam;