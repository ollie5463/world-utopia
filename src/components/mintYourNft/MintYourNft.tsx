import { Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ConnectWalletButton from "../ConnectWalletButton";
import ContentWrapper from "../ContentWrapper";
import Countdown from "../Countdown";
import SocialMedia from "../socialMedia/SocialMedia";

const useStyles: any = makeStyles((theme: any) => ({
  mainNft: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
    margin: "0 auto",
  },
  welcome: {
    minWidth: "300px",
    margin: "20px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  container: {
    display: "flex !important",
    justifyContent: "space-around",
    marginBottom: "60px",
  },
  innerContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    margin: "20px auto",
  },
  countdownContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    margin: "0",
    background: "white",
  },
}));

function MintYourNft() {
  const classes = useStyles();
  return (
    <>
      <Grid flexDirection="column-reverse" className={classes.container}>
        <Container className={classes.innerContainer}>
          <Typography className={classes.welcome} variant="h1">
            Welcome to World Utopia!
          </Typography>
          <SocialMedia />
        </Container>
        <img
          className={classes.mainNft}
          alt="whale nft"
          src="whale-nft.png"
        ></img>
      </Grid>
      <Grid /*direction="column" */ className={classes.countdownContainer}>
        <Countdown />
        <ConnectWalletButton />
      </Grid>
    </>
  );
}
export default MintYourNft;
