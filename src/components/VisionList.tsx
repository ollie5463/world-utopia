import '../App.css';
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

type ListItems = string[]

type ListProps = {
    items: ListItems
}

function VisionList(props: ListProps) {
  return (
    <List>
        {props.items.map((item) => <ListItem key={item}><Typography variant='body1'>{item}</Typography></ListItem>)}
    </List>
  );
}

export default VisionList;
