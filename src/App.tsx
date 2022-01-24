import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <img className='Logo' alt='seabums logo' src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61a990923ba97219140c08f3_Seabums-Ocean-Crew-Logo.png'></img>
      <div className='flex-box-container'>
        <img className='fish' alt='fishman' src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61aa284d2be4492575a0d526_Seabums-Character-Small.png' ></img>
        <div className='text'>
          <h1>Join Seabums to Explore NFTs, Make Friends, and Help the Oceans</h1>
          <ul className='list'>
            <li>
              <p>Public mint still open at .04 ETH</p>
            </li>
            <li>
                <p>20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)</p>
            </li>
          </ul>
          <a href=''>Connect your Wallet to Mint</a>
        </div>
      </div>
    </div>
  );
}

export default App;
