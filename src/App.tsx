import { ThemeProvider } from '@mui/material/styles';
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
import RarityScale from './components/RarityScale/RarityScale';
import { Container, createTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
  widthRestrictionContainer: {
      maxWidth: '1250px !important'
  }
}));

const theme = createTheme({
    typography: {
      fontFamily: 'Candal, sans-serif;',
      h1: {
        fontSize: '40px',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '30px',
        fontWeight: 'bold'
      }
    },
    palette: {
      primary: {
        light: '#FF9D9D',
        main: '#FF9D9D',
        dark: '#FF9D9D',
        contrastText: '#FFFFF'
      },
      secondary: {
        light: '#FF9D9D',
        main: '#FF9D9D',
        dark: '#FF9D9D',
        contrastText: '#FFFFF'

      }
    }
})

function App() {

  console.log(theme)
  const [isDesktop, setIsDesktop] = useState(true);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid > 
        {/* className={classes.widthRestrictionContainer}> */}
        {/* change to mobile menu when below certain width??????????? */}
        {isDesktop ? <Menu/> : <MobileMenu/> }
        {isDesktop ? <MintYourNft /> : <MintYourNftMobile /> }
        <OurVision isDesktop={isDesktop} />
        {isDesktop ? <RarityScale /> : <FlickeringNft/>}
        <Roadmap/>
        <MeetTheTeam isDesktop={isDesktop}/>
        <FAQs/>
        <SocialMedia />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
