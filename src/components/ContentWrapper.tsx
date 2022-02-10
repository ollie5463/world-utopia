import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    contentWrapper: {
        margin: '0 20px',
        maxWidth: '1400px',
        [theme.breakpoints.up('contentWrapperMaxWidth')]: {
            margin: 'auto'
        }
    }
  }));
  

function ContentWrapper({ children }: {children: any}) {
    const classes = useStyles();
    return (
        <Grid className={classes.contentWrapper}>
            {children}
        </Grid>
    )
}

export default ContentWrapper;