import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ConnectWalletButton from "../ConnectWalletButton";
import Countdown from "../Countdown";
import SocialMedia from "../socialMedia/SocialMedia";

const useStyles: any = makeStyles((theme: any) => ({
    mainNft: {
        'max-width': '250px',
        'max-height': '250px',
        'min-width': '250px',
        'min-height': '250px',
        overflow: 'hidden'
    },
    welcome: {
        'font-size': '40px !important',
        minWidth: '300px',
        fontWeight: 'bold !important'
    },
    container: {
        display: 'flex !important',
        justifyContent: 'space-around',
        margin: '20px 0'
    },
    innerContainer: {
        display: 'flex !important',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '20px 0'
    }, 
    countdownContainer: {
        display: 'flex !important',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 0'
    }
}));

function MintYourNft() {
    const classes = useStyles();
    return (
        <>  
            <Container className={classes.container}>
                <Container className={classes.innerContainer}>
                    <Typography className={classes.welcome} variant='h1'>Welcome to World Utopia!</Typography>
                    <SocialMedia />
                </Container>
                <img className={classes.mainNft} alt='fish nft' src='seabums-nft.png' ></img>
            </Container>
            <Container className={classes.countdownContainer}>
                <Countdown/>
                <ConnectWalletButton />
            </Container>
        </>
    )
}
export default MintYourNft;