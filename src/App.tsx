import './App.css';
import ConnectWalletButton from './components/ConnectWalletButton';
import Countdown from './components/Countdown';
import FAQs from './components/FAQs/FAQs';
import FlickeringNft from './components/flickeringNft/FlickeringNft';
import Header from './components/Header';
import List from './components/List';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import BurgerMenu from './components/mobile/BurgerMenu';
import Roadmap from './components/roadmap/Roadmap';
import SocialMedia from './components/socialMedia/SocialMedia';

function App() {
  return (
    <div className='App'>
      <div className='flex-box-container'>
        <Header/>
        <BurgerMenu/>
      </div>
      <div>
        <img className='main-nft' alt='fishman' src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61aa284d2be4492575a0d526_Seabums-Character-Small.png' ></img>
        <Countdown/>
        <ConnectWalletButton />
        <SocialMedia />
        <div className='text-container'>
          <h1>Our Vision</h1>
          <List items={['Public mint still open at .04 ETH', '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)']}></List>
        </div>
      </div>
      <FlickeringNft/>
      <div>
        <h1>World Utopia roadmap</h1>
        <Roadmap/>
      </div>
      <MeetTheTeam/>
      <FAQs/>
      <SocialMedia />
    </div>
  );
}

export default App;
