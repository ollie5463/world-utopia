import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import { useAppContext } from "../../../hooks";
import ConnectWalletButton from "../../ConnectWalletButton";
import Countdown from "../../Countdown";
import SocialMedia from "../../socialMedia/SocialMedia";
import JoinDiscord from "../../JoinDiscord";

const useStyles: any = makeStyles((theme: any) => ({
    mainNft: {
        'max-width': '250px',
        'max-height': '250px'
    }
}))

function MintYourNft() {
    const classes = useStyles();
    const { shouldShowConnectWallet } = useAppContext();
    return (
        <Grid display='flex' flexDirection='column' alignItems='center'>
            <img className={classes.mainNft} alt='whale nft' src='whale-nft.png' ></img>
            <Countdown/>
            {shouldShowConnectWallet ? <ConnectWalletButton /> : <JoinDiscord />}
            <SocialMedia />
        </Grid>
    )
}
export default MintYourNft;