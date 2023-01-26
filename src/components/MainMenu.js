import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Link, Stack} from "@mui/material";
import {menuPrincipal} from "../navigation";
import SubMenu from "./SubMenu";
import MailIcon from "@mui/icons-material/Mail";

const MainMenu = () => {
  const [subMenu, setSubMenu] = useState({open: false, name: "MenuALL"});
  const navigate = useNavigate();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("md"));
  const goToLink = (link) => {
    closeLink();
    navigate(link);
  };
  const openLink = (directLink, link) => () => {
    directLink
      ? goToLink(link)
      : setSubMenu({...subMenu, open: true, name: link});
  };
  const closeLink = () => {
    setSubMenu({...subMenu, open: false});
  };

  return mobileDevice ? (
    <>
      <Stack
        direction='row'
        spacing={4}
        alignItems='center'
        component='nav'
        sx={{
          borderTop: 1,
          borderColor: "primary.main",
        }}
      >
        <Link
          underline='none'
          variant='subtitle1'
          component='a'
          sx={{cursor: "pointer", "&:hover": {color: "error.main"}}}
          onClick={openLink(false, "menuALL")}
        >
          MENU
        </Link>
      </Stack>
      <SubMenu
        open={subMenu.open}
        name={subMenu.name}
        handleClose={closeLink}
      />
    </>
  ) : (
    <>
      <Stack
        direction='row'
        spacing={4}
        alignItems='center'
        component='nav'
        sx={{borderTop: 1, borderColor: "primary.main", paddingTop: 1}}
      >
        {menuPrincipal.map((menuItem) => {
          return menuItem.directLink ? (
            <Link
              key={`nav-${menuItem.label}`}
              underline='none'
              variant='subtitle1'
              component='a'
              sx={{cursor: "pointer", "&:hover": {color: "error.main"}}}
              onClick={openLink(menuItem.directLink, menuItem.link)}
              onMouseOver={closeLink}
            >
              {menuItem.label}
            </Link>
          ) : (
            <Link
              key={`nav-${menuItem.label}`}
              underline='none'
              variant='subtitle1'
              component='a'
              sx={{cursor: "pointer", "&:hover": {color: "error.main"}}}
              onMouseOver={openLink(menuItem.directLink, menuItem.link)}
            >
              {menuItem.label}
            </Link>
          );
        })}
        <Link
          component='a'
          onClick={openLink(true, "/contact")}
          sx={{cursor: "pointer"}}
        >
          <MailIcon color='primary' sx={{"&:hover": {color: "error.main"}}} />
        </Link>
      </Stack>
      <SubMenu
        open={subMenu.open}
        name={subMenu.name}
        handleClose={closeLink}
      />
    </>
  );
};

export default MainMenu;
