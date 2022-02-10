import { List, ListItem, ListItemButton, ListItemText, Grid } from "@mui/material";
import Header from '../Header';
import { makeStyles } from '@mui/styles';

const useStyles:any = makeStyles((theme: any) => ({
    desktopMenu: {
        display: 'flex'
    },
    listItem: {
        [theme.breakpoints.down('xl')]: {
            padding: '4px 4px !important'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '0 !important'
        }
    },
    listItemText:{
        '&> span': {
            fontWeight: 'bold !important',
            fontSize: '30px',
            [theme.breakpoints.down('lg')]: {
                fontSize: '20px'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '15px'
            },
            whiteSpace:'nowrap'
        }
    },
    menu: {
        [theme.breakpoints.down('mobileMenuMaxWidth')]: {
            display: 'none !important'
        }
    }
}))

function Menu() {
    const classes = useStyles();
    return (
        <Grid className={classes.menu}>
            <List className={classes.desktopMenu}>
                <ListItem className={classes.listItem} key='world utopia'>
                    <Header/>
                </ListItem>
                <ListItem className={classes.listItem} key='minting'>
                <ListItemButton  component='a' href='#Minting' sx={{ textAlign: 'center' }} key='Minting'>
                    <ListItemText className={classes.listItemText} primary='Minting' />
                </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='vision'>
                    <ListItemButton component='a' href='#Vision' sx={{ textAlign: 'center' }} key='Vision'>
                        <ListItemText className={classes.listItemText} primary='Vision' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='rarity'>
                    <ListItemButton component='a' href='#Rarity' sx={{ textAlign: 'center' }} key='Rarity'>
                        <ListItemText className={classes.listItemText} primary='Rarity' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='roadmap'>
                    <ListItemButton component='a' href='#Roadmap' sx={{ textAlign: 'center' }} key='Roadmap'>
                        <ListItemText className={classes.listItemText} primary='Roadmap' />
                    </ListItemButton>  
                </ListItem>
                <ListItem className={classes.listItem} key='the team'>
                    <ListItemButton component='a' href='#TheTeam' sx={{ textAlign: 'center' }} key='The Team'>
                        <ListItemText className={classes.listItemText} primary='The Team' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='faq'>
                    <ListItemButton component='a' href='#FAQ' sx={{ textAlign: 'center' }} key='FAQ'>
                        <ListItemText className={classes.listItemText} primary='FAQ' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Grid>
    )
}

export default Menu; 