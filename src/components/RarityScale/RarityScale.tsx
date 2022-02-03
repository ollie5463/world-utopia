import { Container, ImageList, ImageListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    rarityArrow: {
        width: '100%',
        height: '20px'
    }
  }));

const itemList: {rarity: string, src: string}[] = [{
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
    }];

function RarityScale() {
    const classes = useStyles();
    return (
        <Container>
            <ImageList cols={itemList.length}>
                {
                    itemList.map(({rarity, src}) => (
                        <ImageListItem key={rarity + ' nft'}>
                            <img
                                src={src}
                                alt={rarity + ' nft'}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
            <img className={classes.rarityArrow} src='arrows.png' alt='nft rarity meter' />
        </Container>

    )
}

export default RarityScale;