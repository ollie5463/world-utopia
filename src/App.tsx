import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import ConnectWalletButton from './components/ConnectWalletButton';
import Countdown from './components/Countdown';
import FAQs from './components/FAQs/FAQs';
import FlickeringNft from './components/flickeringNft/FlickeringNft';
import Header from './components/Header';
import List from './components/List';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import MobileMenu from './components/mobile/Menu/Menu';
import Menu from './components/menu/Menu';
import Roadmap from './components/roadmap/Roadmap';
import SocialMedia from './components/socialMedia/SocialMedia';

const theme = createTheme() as any;

theme.typography.h2 = {
  'font-size': '2rem',
  margin: '1.5rem 0'
}

function App() {

  const [isDesktop, setIsDesktop] = useState(true);

  const theme = useTheme() as any;
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <div className='flex-box-container'> */}
          {/* <Header/> */}
          {isDesktop ? <Menu/> : <MobileMenu/> }
        {/* </div> */}
        <div>
          <img className='main-nft' alt='fishman' src='seabums-nft.png' ></img>
          <Countdown/>
          <ConnectWalletButton />
          <SocialMedia />
          <div className='text-container'>
            <h1 id='Vision'>Our Vision</h1>
            <List items={['Public mint still open at .04 ETH', '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)']}></List>
          </div>
        </div>
        <FlickeringNft/>
        <div>
          <Roadmap/>
        </div>
        <MeetTheTeam/>
        <FAQs/>
        <SocialMedia />
      </div>
    </ThemeProvider>
  );
}

export default App;
