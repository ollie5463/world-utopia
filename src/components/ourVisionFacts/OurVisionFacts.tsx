import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
    facts: string[]
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
        {facts.map((item, index) => {
            const isOdd = index % 2;
            return <Container key={index} sx={{ marginLeft: !isOdd ? 0 : 'auto', marginRight: !isOdd ? 'auto' : 0 }} className={classes.fact}>
                    <Typography variant='body1'>{item}</Typography>
                </Container>
        }
        )}
    </>
    )
}

export default OurVisionFacts;