import './SocialMedia.css';
import { IconButton } from '@mui/material';
import { Instagram, Twitter } from '@mui/icons-material';

function SocialMedia() {
    return (
        <div className='social-media-container'>
            <IconButton>
                <Instagram fontSize='large'/>
            </IconButton>
            <IconButton>
                <Twitter fontSize='large'/>
            </IconButton>
            <IconButton>
                <img className='social-media-link' alt='instagram' src='discord-icon.jpg'></img>
            </IconButton>
        </div>
    )
}

export default SocialMedia;