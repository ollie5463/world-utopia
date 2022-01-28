import { Box, Button, Drawer, List, ListItem, ListItemText, Divider, ListItemButton } from "@mui/material";
import { Menu as MenuIcon} from '@mui/icons-material';
import { useState } from "react";

function Menu() {
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
          <ListItem>
            <ListItemButton  component='a' href='#Minting' sx={{ 'text-align': 'center' }} key='Minting'>
                <ListItemText primary='Minting' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
            <ListItemButton component='a' href='#Vision' sx={{ 'text-align': 'center' }} key='Vision'>
                <ListItemText primary='Vision' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
            <ListItemButton component='a' href='#Rarity' sx={{ 'text-align': 'center' }} key='Rarity'>
                <ListItemText primary='Rarity' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
            <ListItem>
                <ListItemButton component='a' href='#Roadmap' sx={{ 'text-align': 'center' }} key='Roadmap'>
                    <ListItemText primary='Roadmap' />
                </ListItemButton>  
            </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
            <ListItemButton component='a' href='#TheTeam' sx={{ 'text-align': 'center' }} key='The Team'>
                <ListItemText primary='The Team' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
            <ListItemButton component='a' href='#FAQ' sx={{ 'text-align': 'center' }} key='FAQ'>
                <ListItemText primary='FAQ' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
    )

    return (
    <>
        <Button onClick={toggleDrawer(true)}>
            <MenuIcon fontSize='large'/>
        </Button>
        <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    </>
    )
}

export default Menu;