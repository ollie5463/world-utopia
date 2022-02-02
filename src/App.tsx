import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import FAQs from './components/FAQs/FAQs';
import FlickeringNft from './components/flickeringNft/FlickeringNft';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import MobileMenu from './components/mobile/Menu/Menu';
import Menu from './components/menu/Menu';
import Roadmap from './components/roadmap/Roadmap';
import SocialMedia from './components/socialMedia/SocialMedia';
import MintYourNftMobile from './components/mintYourNft/mobile/MintYourNft';
import MintYourNft from './components/mintYourNft/MintYourNft';
import OurVision from './components/ourVision/OurVision';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
  myContainer: {
      maxWidth: '1000px !important'
  }
}));

function App() {

  const [isDesktop, setIsDesktop] = useState(true);
  const classes = useStyles();

  const theme = useTheme() as any;
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.myContainer}>
        {isDesktop ? <Menu/> : <MobileMenu/> }
        {isDesktop ? <MintYourNft /> : <MintYourNftMobile /> }
        <OurVision />
        <FlickeringNft/>
        <Roadmap/>
        <MeetTheTeam/>
        <FAQs/>
        <SocialMedia />
      </Container>
    </ThemeProvider>
  );
}

export default App;
