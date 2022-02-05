import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
    facts: string[]
}

const useStyles: any = makeStyles(({
    fact: {
        background: 'darkblue',
        borderRadius: '34px',
        maxWidth: '200px !important',
        padding: '20px !important'
    }
}));

function OurVisionFacts({ facts }: Props) {

    const classes = useStyles();

    return (
    <>
        {facts.map((item, index) => {
            const isOdd = index % 2;
            return<Container sx={{ marginLeft: isOdd ? 0 : 'auto', marginRight: isOdd ? 'auto' : 0 }} className={classes.fact}>{item}</Container>
        }
        )}
    </>
    )
}

export default OurVisionFacts;