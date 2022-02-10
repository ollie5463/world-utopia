import { ThemeProvider } from '@mui/material/styles';
import { createTheme, Grid } from '@mui/material';
import { useState } from 'react';
import MobileDetect from 'mobile-detect';
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
import ContentWrapper from './components/ContentWrapper';


const theme = (createTheme as any)({
    typography: {
      fontFamily: 'Candal, sans-serif;',
      h1: {
        fontSize: '40px',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '30px',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '25px',
        fontWeight: 'bold'
      }
    },
    breakpoints: {
      values: {
        roadMapMaxWidthDesktop: 1110,
        roadMapMobile: 580,
        mobileMenuMaxWidth: 765,
        contentWrapperMaxWidth: 1455,
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
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
});
const md = new MobileDetect(window.navigator.userAgent);

function App() {

  const isPhone = md.phone();
  const isTablet = md.tablet();
  const [isDesktop] = useState(!isPhone && !isTablet);
  console.log('phone: ', !md.phone())
  console.log('tablet: ', !md.tablet())
  console.log('isDesktop: ', !md.phone() && !md.tablet)
  console.log('isDesktop: ',isDesktop)

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <ContentWrapper>
        <Menu/>
        <MobileMenu/>
        {isDesktop ? <MintYourNft /> : <MintYourNftMobile /> }
          <OurVision isDesktop={isDesktop} />
          {isDesktop ? <RarityScale /> : <FlickeringNft/>}
          <Roadmap isDesktop={isDesktop}/>
          <MeetTheTeam isDesktop={isDesktop}/>
          <FAQs/>
          <SocialMedia />
        </ContentWrapper>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
