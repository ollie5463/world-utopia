import { Box, Button, Drawer, List, ListItem, ListItemText, Divider, ListItemButton, Grid } from "@mui/material";
import { Menu as MenuIcon} from '@mui/icons-material';
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import Header from '../../Header';

const useStyles:any = makeStyles((theme: any) => ({
    menuButton: {
        flexGrow: 3
    },
    logoContainer: {
        flexGrow: 4
    },
    menu: {
        [theme.breakpoints.up('mobileMenuMaxWidth')]: {
            display: 'none !important'
        }
    }
}))

function Menu() {
    const classes = useStyles();
    const [state, setState] = useState(false)

    const toggleDrawer = (open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          setState(open);
    }

    const list = (): any => (

        <Box
        sx={{width: 250}}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        >
      <List>
          <ListItem key='minting'>
            <ListItemButton  component='a' href='#Minting' sx={{ 'text-align': 'center' }} key='Minting'>
                <ListItemText primary='Minting' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key='vision'>
            <ListItemButton component='a' href='#Vision' sx={{ 'text-align': 'center' }} key='Vision'>
                <ListItemText primary='Vision' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key='rarity'>
            <ListItemButton component='a' href='#Rarity' sx={{ 'text-align': 'center' }} key='Rarity'>
                <ListItemText primary='Rarity' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
            <ListItem key='roadmap'>
                <ListItemButton component='a' href='#Roadmap' sx={{ 'text-align': 'center' }} key='Roadmap'>
                    <ListItemText primary='Roadmap' />
                </ListItemButton>  
            </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key='the team'>
            <ListItemButton component='a' href='#TheTeam' sx={{ 'text-align': 'center' }} key='The Team'>
                <ListItemText primary='The Team' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key='faq'>
            <ListItemButton component='a' href='#FAQ' sx={{ 'text-align': 'center' }} key='FAQ'>
                <ListItemText primary='FAQ' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
    )

    return (
    <Grid className={classes.menu} display='flex' flexDirection='row-reverse' rowSpacing={1}>
        <Grid className={classes.logoContainer} >
            <Header styles={{ flex: 1 }}/>
        </Grid>
            <Button className={classes.menuButton} onClick={toggleDrawer(true)}>
                <MenuIcon fontSize='large'/>
            </Button>
        <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    </Grid>
    )
}

export default Menu;