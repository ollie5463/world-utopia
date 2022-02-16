import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
// import { useEffect, useState } from "react";
// import { flickeringTime } from "../constants";

const useStyles: any = makeStyles((theme: any) => ({
  container: {
    textAlign: "center",
  },
  outerContainer: {
    display: "flex !important",
    maxWidth: "none !important",
    // margin: "100px 0",
    flexDirection: 'column',
    maxHeight: "600px",
  },
  rarityTitle: {
    textAlign: "center",
    margin: "100px 0 !important",
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
    <Grid sx={{ display: "flex", flexDirection: "column-reverse" }}>
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
  // const [imageIndex, setImageIndex] = useState(0);

  const images: Image[] = [
    {
      rarity: "common",
      src: "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193476a64b7ed0f2f0bd0f4_Untitled-1.png",
    },
    {
      rarity: "uncommon",
      src: "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61934af77a6e4037059e5cf8_02.png",
    },
    {
      rarity: "rare",
      src: "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193533234b645cee58f1e77_03.png",
    },
    {
      rarity: "legendary",
      src: "https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png",
    },
  ];

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1)
  //     }, flickeringTime);
  //     return () => {
  //         clearInterval(interval)
  //     }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [ imageIndex, setImageIndex ]);

  return (
    <Grid className={classes.outerContainer}>
      <Typography className={classes.rarityTitle} variant="h2">
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
