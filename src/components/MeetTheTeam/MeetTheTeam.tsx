import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type Item = {
  name: string;
  image: string;
};

const useStyles: any = makeStyles((theme: any) => ({
  meetTheTeamTitle: {
    textAlign: "center",
    margin: "100px 0 !important",
  },
  itemContainer: {
    display: "flex !important",
    flexDirection: "column-reverse",
  },
  caption: {
    textAlign: "center",
  },
  outerContainer: {
    display: "flex !important",
    maxWidth: "none !important",
    margin: "100px 0",
  },
  innerContainer: {
    display: "flex !important",
    maxWidth: "none !important",
  },
  teamGrid: {
    justifyContent: "space-between",
  },
  carousel: {
    overflow: "unset",
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    display: "flex",
  },
  mobileImage: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
    maxHeight: "300px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const getItemCarouselItem = (name: string, image: string, classes: any) => {
  return (
    <Grid
      key={name}
      flexDirection="column-reverse"
      className={classes.itemContainer}
    >
      <Typography className={classes.caption} variant="caption">
        {name}
      </Typography>
      <img
        style={{ maxHeight: "250px", maxWidth: "250px" }}
        src={image}
        alt={name}
      />
    </Grid>
  );
};
const getItemCarouselItemMobile = (
  name: string,
  image: string,
  classes: any
) => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column-reverse" }}>
      <Typography variant="h3" style={{ margin: "40px auto" }}>
        {name}
      </Typography>
      <Grid className={classes.mobileCarouselContainer}>
        <img className={classes.mobileImage} src={image} alt={name} />
      </Grid>
    </Grid>
  );
};

function MeetTheTeam({ isDesktop }: { isDesktop: boolean }) {
  const classes = useStyles();

  const items: Item[] = [
    {
      name: "Ollie",
      image:
        "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193476a64b7ed0f2f0bd0f4_Untitled-1.png",
    },
    {
      name: "Joe",
      image:
        "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61934af77a6e4037059e5cf8_02.png",
    },
    {
      name: "Baiden",
      image:
        "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193533234b645cee58f1e77_03.png",
    },
    {
      name: "Lew",
      image:
        "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png",
    },
    {
      name: "Max",
      image:
        "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png",
    },
  ];

  return (
    <Grid flexDirection="column" sx={{ maxHeight: isDesktop ? 'none' : '600px' }} className={classes.outerContainer}>
      <Typography
        className={classes.meetTheTeamTitle}
        variant="h2"
        id="TheTeam"
      >
        Meet the team!
      </Typography>
      {!isDesktop && (
        <Carousel
          navButtonsAlwaysVisible
          sx={{ "& > div": { height: "300px !important" } }}
        >
          {items.map((itemProps) =>
            getItemCarouselItemMobile(itemProps.name, itemProps.image, classes)
          )}
        </Carousel>
      )}
      <Grid className={classes.teamGrid} container>
        {isDesktop &&
          items.map((itemProps) =>
            getItemCarouselItem(itemProps.name, itemProps.image, classes)
          )}
      </Grid>
    </Grid>
  );
}

export default MeetTheTeam;
