import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";

const useStyles: any = makeStyles((theme: any) => ({
  container: {
    textAlign: "center",
  },
  outerContainer: {
    display: "flex !important",
    maxWidth: "none !important",
    flexDirection: 'column',
    maxHeight: "600px",
    padding: '0 20px'
  },
  rarityTitle: {
    textAlign: "center",
    margin: "80px 0 !important",
    fontSize: '45px !important'
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
type Image = {
  rarity: string;
  src: string;
};

const getItemCarouselItemMobile = (
  name: string,
  image: string,
  classes: any
) => {
  return (
    <Grid key={name} sx={{ display: "flex", flexDirection: "column-reverse" }}>
      <Typography variant="h3" style={{ margin: "40px auto" }}>
        {name}
      </Typography>
      <Grid>
        <img className={classes.mobileImage} src={image} alt={name} />
      </Grid>
    </Grid>
  );
};

function FlickeringNft() {
  const classes = useStyles();

 const images: Image[] = [{
        rarity: 'CARBON',
        src: 'monkey-nft.png',
    }, {
        rarity: 'EARTH',
        src: 'penguin-nft.png',
    }, {
        rarity: 'WIND',
        src: 'polar-bear-nft.png',
    }, {
        rarity: 'FIRE',
        src: 'turtle-nft.png'
    }, {
        rarity: 'BRONZE',
        src: 'whale-nft.png'
    }, {
        rarity: 'SILVER',
        src: 'dolphin-nft.png'
    }, {
        rarity: 'GOLD',
        src: 'shark-nft.png'
    }];
  return (
    <Grid className={classes.outerContainer}>
      <Typography id='rarity' className={classes.rarityTitle} variant="h2">
        Rarity Scale!
      </Typography>
      <Carousel
        duration={1000}
        navButtonsAlwaysVisible
        sx={{
          "& > div": { height: "300px !important" },
        }}
      >
        {images.map((itemProps) =>
          getItemCarouselItemMobile(itemProps.rarity, itemProps.src, classes)
        )}
      </Carousel>
    </Grid>
  );
}
export default FlickeringNft;
