import { useCallback, useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskOnboarding from '@metamask/onboarding';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    connectWallet: {
        margin: '10px 0 !important',
        maxWidth: '287px'
    }
}));

function ConnectWalletButton() {
    const classes = useStyles();

    const [isWalletConnected, setIsWalletConnected] = useState(false);
    
    const isMetaMaskInstalled = useCallback(() => {
        const { ethereum } = window as any;
        return Boolean(ethereum && ethereum.isMetaMask)
    }, []);
    
    const metaMastClientCheck = useCallback(async () => {
        if(!isMetaMaskInstalled()){
            const onboarding = new MetaMaskOnboarding();
            onboarding.startOnboarding();
        } else {
            const provider = await new ethers.providers.Web3Provider((window as any).ethereum, "any")
            await provider.send("eth_requestAccounts", [])
        } 
    }, [])

    const mintNFT = useCallback(async () => {
        alert('Minting your NFT')
    }, [])
    
    const connectMaskProps = {
        text: 'Click to connect your crypto wallet!',
        onClick: metaMastClientCheck
    };
    const mintNFTProps = {
        text: 'Click to mint your NFT for 0.04 ETH',
        onClick: mintNFT
    };

    return (
        <Button id='Minting' className={classes.connectWallet} variant="contained" onClick={isWalletConnected ? mintNFTProps.onClick : connectMaskProps.onClick} >{isWalletConnected? mintNFTProps.text : connectMaskProps.text}</Button>   
    )
}

export default ConnectWalletButton;