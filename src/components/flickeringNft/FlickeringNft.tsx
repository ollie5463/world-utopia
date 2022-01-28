import { useEffect, useState } from "react";
import { flickeringTime } from "../constants";

function FlickeringNft() {

    const [imageIndex, setImageIndex] = useState(0);

    const images = [
        {
            rarity: 'common',
            src: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193476a64b7ed0f2f0bd0f4_Untitled-1.png',
        }, {
            rarity: 'uncommon',
            src: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61934af77a6e4037059e5cf8_02.png',
        }, {
            rarity: 'rare',
            src: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193533234b645cee58f1e77_03.png',
        }, {
            rarity: 'legendary',
            src: 'https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png'
        }
    ]
    

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1)
        }, flickeringTime);
        return () => {
            clearInterval(interval)
        }
    }, [ imageIndex, setImageIndex ]);

    return (
    <>
        <img id='Rarity' alt='nft' src={images[imageIndex].src}></img>
        <h3>{images[imageIndex].rarity}</h3>
    </>
    )
}
export default FlickeringNft;