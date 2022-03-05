import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
    line: {
        height: '2200px',
        width: '6px',
        position: 'absolute',
        left: '50vw',
        [theme.breakpoints.down('roadMapMaxWidthDesktop')]: {
            display: 'none'
        }
    },
  }));

function Line() {
    const classes = useStyles();
    return (
        <>
            <img id='line' className={classes.line} src='line.png' alt='line'></img>
            {/* <img style={{
                height: '1500px',
                width: '6px',
                position: 'absolute',
                left: '50vw',
                opacity: 0.5
            }} src='dark-line.png' alt='line'></img> */}
        </>
    )
}

export default Line;