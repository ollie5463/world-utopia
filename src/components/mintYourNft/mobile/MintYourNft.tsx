import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import ConnectWalletButton from "../../ConnectWalletButton";
import Countdown from "../../Countdown";
import SocialMedia from "../../socialMedia/SocialMedia";

const useStyles: any = makeStyles((theme: any) => ({
    mainNft: {
        'max-width': '250px',
        'max-height': '250px'
    }
}))

function MintYourNft() {
    const classes = useStyles();
    return (
        <Grid display='flex' flexDirection='column' alignItems='center'>
            <img className={classes.mainNft} alt='fish nft' src='whale-nft.png' ></img>
            <Countdown/>
            <ConnectWalletButton />
            <SocialMedia />
        </Grid>
    )
}
export default MintYourNft;