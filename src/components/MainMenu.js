import {useNavigate} from "react-router-dom";
import {Link, Stack} from "@mui/material";
import {menuPrincipal} from "../navigation";

const MainMenu = () => {
  const navigate = useNavigate();
  const handleClick = (directLink, link) => () => {
    directLink ? navigate(link) : navigate("/");
  };
  return (
    <Stack direction='row' spacing={4} component='nav'>
      {menuPrincipal.map((menuItem) => {
        return (
          <Link
            key={`nav-${menuItem.label}`}
            underline='hover'
            variant='subtitle1'
            component='a'
            sx={{cursor: "pointer"}}
            onClick={handleClick(menuItem.directLink, menuItem.link)}
          >
            {menuItem.label}
          </Link>
        );
      })}
    </Stack>
  );
};

export default MainMenu;
