import '../App.css';
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

type ListItems = string[]

type ListProps = {
    items: ListItems
}

const useStyles: any = makeStyles((theme: any) => ({
  ourVisionList: {
    padding: '12px !important'
  }
}));

function VisionList(props: ListProps) {
  const classes = useStyles();
  
  return (
    <List className={classes.ourVisionList}>
        {props.items.map((item) => <ListItem key={item}><Typography variant='body1'>{item}</Typography></ListItem>)}
    </List>
  );
}

export default VisionList;
