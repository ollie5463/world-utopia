import { Carousel } from 'react-responsive-carousel';
import './MeetTheTeam.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function MeetTheTeam() {
    return (
        <>
            <h1>Meet the team!</h1>
            <Carousel showArrows={false}>
                <div>
                    <img className='team-profile-image' alt='ollie' src="https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193476a64b7ed0f2f0bd0f4_Untitled-1.png" />
                    <p className="team-profile">Ollie</p>
                </div>
                <div>
                    <img className='team-profile-image' alt='joe' src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61934af77a6e4037059e5cf8_02.png' />
                    <p className="team-profile">Joe</p>
                </div>
                <div>
                    <img className='team-profile-image' alt='baiden' src="https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193533234b645cee58f1e77_03.png" />
                    <p className="team-profile">Baiden</p>
                </div>
                <div>
                    <img  className='team-profile-image' alt='lew' src="https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png" />
                    <p className="team-profile">Lew</p>
                </div>
            </Carousel>
        </>
    )
}

export default MeetTheTeam;