import {AppBar, Stack, Toolbar} from "@mui/material";
import MainMenu from "./MainMenu";
import logo from "../pictures/logo.svg";

const Header = () => {
  return (
    <AppBar
      color='background'
      position='fixed'
      sx={{
        p: {xs: "0.1rem", md: "0.5rem"},
        width: "100%",
      }}
    >
      <Toolbar disableGutters sx={{width: "100%"}}>
        <Stack
          spacing={{xs: 0, md: 1}}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt='HAPPYQUUS & EQUUSYMBIOSE'
            style={{maxWidth: "500px"}}
          />
          <MainMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
