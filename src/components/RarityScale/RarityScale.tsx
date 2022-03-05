import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  rarityArrow: {
    width: "100%",
    height: "20px",
  },
  rarityContainer: {
    margin: "100px 0 !important",
  },
  rarityTitle: {
    textAlign: "center",
  },
  rarityImage: {
    alignItems: "center",
  },
}));

const itemList: { rarity: string; src: string }[] = [
  {
    rarity: "CARBON",
    src: "monkey-nft.png",
  },
  {
    rarity: "EARTH",
    src: "penguin-nft.png",
  },
  {
    rarity: "WIND",
    src: "polar-bear-nft.png",
  },
  {
    rarity: "FIRE",
    src: "turtle-nft.png",
  },
  {
    rarity: "BRONZE",
    src: "whale-nft.png",
  },
  {
    rarity: "SILVER",
    src: "dolphin-nft.png",
  },
  {
    rarity: "GOLD",
    src: "shark-nft.png",
  },
];

function RarityScale() {
  const classes = useStyles();
  return (
    <Grid className={classes.rarityContainer}>
      <Typography className={classes.rarityTitle} id="rarity" variant="h2">
        Rarity Scale
      </Typography>
      <ImageList className={classes.rarityImage} cols={itemList.length}>
        {itemList.map(({ rarity, src }) => (
          <ImageListItem className={classes.rarityImage} key={rarity + " nft"}>
            <img
              style={{ maxWidth: "300px", maxHeight: "300px" }}
              src={src}
              alt={rarity + " nft"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <img
        className={classes.rarityArrow}
        src="arrows.png"
        alt="nft rarity meter"
      />
    </Grid>
  );
}

export default RarityScale;
