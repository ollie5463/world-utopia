import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
    facts: { heading: string, fact: string }[]
}

const useStyles: any = makeStyles((theme: any) => ({
    fact: {
        background: '#E7FF00',
        color: '#1D1D1B',
        borderRadius: '34px',
        maxWidth: '200px !important',
        padding: '20px !important',
        [theme.breakpoints.down('roadMapMobile')]: {
            marginBottom: '40px'
        }
    }
}));

function OurVisionFacts({ facts }: Props) {

    const classes = useStyles();

    return (
    <>
        {Object.entries(facts).map((entry, index) => {
            const isOdd = index % 2;
            console.log(entry)
            const { heading, fact } = entry[1];
            return <Container key={index} sx={{ marginLeft: !isOdd ? 0 : 'auto', marginRight: !isOdd ? 'auto' : 0 }} className={classes.fact}>
                    <Typography variant='h4'>{heading}</Typography>
                    <Typography variant='body1'>{fact}</Typography>
                </Container>
        }
        )}
    </>
    )
}

export default OurVisionFacts;