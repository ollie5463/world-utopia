import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    contentWrapper: {
        padding: '0 20px',
        maxWidth: '1400px',
        [theme.breakpoints.up('contentWrapperMaxWidth')]: {
            margin: 'auto'
        }
    }
  }));
  

function ContentWrapper({ children, styles }: {children: any, styles?: any}) {
    const classes = useStyles();
    return (
        <Grid style={styles} className={classes.contentWrapper}>
            {children}
        </Grid>
    )
}

export default ContentWrapper;