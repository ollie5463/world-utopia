import './SocialMedia.css';
import { IconButton } from '@mui/material';
import { Instagram, Twitter } from '@mui/icons-material';
import { useCallback } from 'react';

function SocialMedia() {

    const onClick = useCallback(() => {
        window.open('https://www.instagram.com/olliebannister/');
    }, [])

    return (
        <div className='social-media-container'>
            <IconButton onClick={onClick}>
                <Instagram fontSize='large'/>
            </IconButton>
            <IconButton onClick={onClick}>
                <Twitter fontSize='large'/>
            </IconButton>
            <IconButton onClick={onClick}>
                <img className='social-media-link' alt='instagram' src='discord-icon.jpg'></img>
            </IconButton>
        </div>
    )
}

export default SocialMedia;