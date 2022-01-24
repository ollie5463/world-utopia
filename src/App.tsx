import './App.css';
import Header from './components/Header';
import List from './components/List';
import Roadmap from './components/roadmap/Roadmap';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='flex-box-container'>
        <img className='fish' alt='fishman' src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61aa284d2be4492575a0d526_Seabums-Character-Small.png' ></img>
        <div className='text'>
          <h1>Join Seabums to Explore NFTs, Make Friends, and Help the Oceans</h1>
          <ul className='list'>
            <List items={['Public mint still open at .04 ETH', '20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)']}></List>
          </ul>
          <a href=''>Connect your Wallet to Mint</a>
        </div>
      </div>
      <div>
        <h1>Seabums Plans &amp; Values</h1>
        <Roadmap/>
      </div>
    </div>
  );
}

export default App;