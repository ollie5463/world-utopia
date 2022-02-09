import { makeStyles } from "@mui/styles";
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
        <>
            <img className={classes.mainNft} alt='fish nft' src='seabums-nft.png' ></img>
            <Countdown/>
            <ConnectWalletButton />
            <SocialMedia />
        </>
    )
}
export default MintYourNft;