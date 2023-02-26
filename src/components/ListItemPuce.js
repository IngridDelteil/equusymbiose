import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Paragraph from "./Paragraph";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

const ListItemPuce = ({children}) => {
  return (
    <ListItem disablePadding alignItems='flex-start'>
      <ListItemIcon>
        <FilterVintageIcon fontSize='small' color='error' sx={{fontSize: 14}} />
      </ListItemIcon>
      <ListItemText>
        <Paragraph>{children}</Paragraph>
      </ListItemText>
    </ListItem>
  );
};

export default ListItemPuce;
