import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import MainMenu from "./MainMenu";
import MailIcon from "@mui/icons-material/Mail";
import logoHQ from "../pictures/logoHQ.svg";
import logoEQS from "../pictures/logoEQS.svg";

const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => {
    navigate(path);
  };
  return (
    <AppBar color='background' sx={{p: "0.5rem"}}>
      <Toolbar disableGutters>
        <Stack
          spacing={1}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack
            direction='row'
            spacing={3}
            alignItems='center'
            justifyContent='center'
            sx={{width: "100%"}}
          >
            <img src={logoHQ} alt='HAPPYQUUS' style={{maxWidth: "250px"}} />
            <Typography variant='h5'>&</Typography>
            <img src={logoEQS} alt='EQUUSYMBIOSE' style={{maxWidth: "200px"}} />
          </Stack>
          <MainMenu />
        </Stack>
        <IconButton size='large' onClick={navigateTo("/contact")}>
          <MailIcon fontSize='large' color='primary' />
        </IconButton>
        {/* <Link to='/'>
            <img src={Logo} alt='APE de Cagnotte' style={{height: "60px"}} />
          </Link> */}
        {/* <Box sx={{display: {xs: "flex", md: "none"}}}> */}
        {/* <Drawer
              anchor='top'
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
              PaperProps={{
                sx: {
                  bgcolor: "#14b8a6",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    key={page.name}
                    to={page.link}
                    onClick={toggleDrawer("top", false)}
                    className={({isActive}) =>
                      isActive ? "navLinkActive" : "navLink"
                    }
                  >
                    {page.name}
                  </NavLink>
                ))}
                <Button
                  variant='contained'
                  fullWidth={true}
                  component={NavLink}
                  to='/rejoindre'
                  color='info'
                  sx={{
                    color: "#f9fafb",
                    textTransform: "none",
                    fontSize: "1.6rem",
                  }}
                >
                  Rejoignez-nous !
                </Button>
              </Box>
            </Drawer> */}
        {/* </Box> */}
        {/* <Box sx={{display: {xs: "none", md: "flex"}, gap: "1.6rem"}}>
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.link}
                className={({isActive}) =>
                  isActive ? "navLinkActive" : "navLink"
                }
              >
                {page.name}
              </NavLink>
            ))}
          </Box> */}
        {/* <Button
            variant='contained'
            component={NavLink}
            to='/rejoindre'
            color='info'
            sx={{
              color: "#f9fafb",
              textTransform: "none",
              fontSize: "1.6rem",
              display: {xs: "none", sm: "block"},
            }}
          >
            Rejoignez-nous !
          </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
