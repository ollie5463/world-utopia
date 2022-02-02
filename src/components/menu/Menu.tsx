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
        [theme.breakpoints.down('md')]: {
            padding: '0px !important'
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
                    <ListItemText primary='Minting' />
                </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='vision'>
                    <ListItemButton component='a' href='#Vision' sx={{ 'text-align': 'center' }} key='Vision'>
                        <ListItemText primary='Vision' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='rarity'>
                    <ListItemButton component='a' href='#Rarity' sx={{ 'text-align': 'center' }} key='Rarity'>
                        <ListItemText primary='Rarity' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='roadmap'>
                    <ListItemButton component='a' href='#Roadmap' sx={{ 'text-align': 'center' }} key='Roadmap'>
                        <ListItemText primary='Roadmap' />
                    </ListItemButton>  
                </ListItem>
                <ListItem className={classes.listItem} key='the team'>
                    <ListItemButton component='a' href='#TheTeam' sx={{ 'text-align': 'center' }} key='The Team'>
                        <ListItemText primary='The Team' />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classes.listItem} key='faq'>
                    <ListItemButton component='a' href='#FAQ' sx={{ 'text-align': 'center' }} key='FAQ'>
                        <ListItemText primary='FAQ' />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default Menu; 