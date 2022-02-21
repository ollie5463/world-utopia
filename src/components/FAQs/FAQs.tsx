import { Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExpandMore } from '@mui/icons-material';

const useStyles: any = makeStyles((theme: any) => ({
    heading: {
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            margin: "40px 0 !important",
            fontSize: '45px'
          }
    },
    container: {
        padding: 0,
        maxWidth: 'unset',
        [theme.breakpoints.down('md')]: {
            padding: '0 20px'
        }
    }
}));

function FAQs() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.heading} variant='h2' id='FAQ'>FAQs</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>When are you going to mint?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How do i connect my wallet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Will i make money?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default FAQs;