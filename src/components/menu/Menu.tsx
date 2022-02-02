import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Header from '../Header';
import { makeStyles } from '@mui/styles';

const useStyles:any = makeStyles((theme: any) => ({
    desktopMenu: {
        display: 'flex'
    },
    container: {
        display: 'flex',
        'justify-content': 'center',
        'flex-wrap': 'nowrap'
    }, 
    listItem: {
        [theme.breakpoints.down('lg')]: {
            padding: '0px !important'
        }
    },
    listItemText:{
        '&> span': {
            fontWeight: 'bold !important',
            fontSize: '30px',
            [theme.breakpoints.down('lg')]: {
                fontSize: '20px'
            }
        }
    }
}))

function Menu() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Header/>
            <List className={classes.desktopMenu}>
                <ListItem className={classes.listItem} key='minting'>
                <ListItemButton  component='a' href='#Minting' sx={{ 'text-align': 'center' }} key='Minting'>
                    <ListItemText className={classes.listItemText} primary='Minting' />
                </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='vision'>
                    <ListItemButton component='a' href='#Vision' sx={{ 'text-align': 'center' }} key='Vision'>
                        <ListItemText className={classes.listItemText} primary='Vision' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='rarity'>
                    <ListItemButton component='a' href='#Rarity' sx={{ 'text-align': 'center' }} key='Rarity'>
                        <ListItemText className={classes.listItemText} primary='Rarity' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='roadmap'>
                    <ListItemButton component='a' href='#Roadmap' sx={{ 'text-align': 'center' }} key='Roadmap'>
                        <ListItemText className={classes.listItemText} primary='Roadmap' />
                    </ListItemButton>  
                </ListItem>
                <ListItem className={classes.listItem} key='the team'>
                    <ListItemButton component='a' href='#TheTeam' sx={{ 'text-align': 'center' }} key='The Team'>
                        <ListItemText className={classes.listItemText} primary='The Team' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='faq'>
                    <ListItemButton component='a' href='#FAQ' sx={{ 'text-align': 'center' }} key='FAQ'>
                        <ListItemText className={classes.listItemText} primary='FAQ' />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default Menu; 