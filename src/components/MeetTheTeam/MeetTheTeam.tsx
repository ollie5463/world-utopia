import './MeetTheTeam.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { makeStyles } from "@mui/styles";
import { Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

type Item = {
    name: string,
    image: string
}

const useStyles: any = makeStyles((theme: any) => ({
    meetTheTeamTitle: {
        textAlign: 'center',
        margin: '100px 0'
    },
    itemContainer: {
        display: 'flex !important',
        flexDirection: 'column-reverse',
        maxHeight: '250px',
        maxWidth: '250px'
    },
    caption: {
        textAlign: 'center'
    },
    outerContainer: {
        display: 'flex !important',
        flexDirection: 'column',
        maxWidth: 'none !important',
        margin: '100px 0'
    },
    innerContainer: {
        display: 'flex !important',
        // flexWrap: 'wrap',
        maxWidth: 'none !important'
    }
  }));

const getItemCarouselItem = (name: string, image: string, classes: any) => {
    return (
        <Container className={classes.itemContainer}>
            <Typography className={classes.caption} variant='caption'>{name}</Typography>
            <img style={{ maxHeight: '250px', maxWidth: '250px' }}src={image} alt={name} />
        </Container>
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
        <Container className={classes.outerContainer}>
            <Typography className={classes.meetTheTeamTitle} variant='h2' id='TheTeam'>Meet the team!</Typography>
            {!isDesktop && <Carousel>
                {items.map((itemProps) => 
                    getItemCarouselItem(itemProps.name, itemProps.image, classes)
                )}
            </Carousel>}
            <Container className={classes.innerContainer}>
                {isDesktop && 
                    items.map((itemProps) => 
                        getItemCarouselItem(itemProps.name, itemProps.image, classes)    
                    )
                }
            </Container>
        </Container>
    )
}

export default MeetTheTeam;