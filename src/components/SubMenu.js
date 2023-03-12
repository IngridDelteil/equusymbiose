import {useNavigate} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {
  Box,
  ClickAwayListener,
  Grid,
  Link,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import {menuHQ, menuEQS} from "../navigation";

const SubMenu = ({open, name, handleClose}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  let menu;
  switch (name) {
    case "menuALL":
      menu = [...menuHQ, ...menuEQS];
      break;
    case "menuHQ":
      menu = menuHQ;
      break;
    case "menuEQS":
      menu = menuEQS;
      break;
    default:
      menu = menuHQ + menuEQS;
      break;
  }
  const navigateTo = (link) => () => {
    handleClose();
    navigate(link);
  };

  return open ? (
    mobileDevice ? (
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor='left'
        open={open}
        onClose={handleClose}
        onOpen=''
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 500,
            backgroundColor: "background.main",
            p: 1,
          },
        }}
      >
        <Box sx={{w: 1, textAlign: "center"}}>
          <Typography variant='h6'>MENU</Typography>
        </Box>
        {menu.map((menuElement) => {
          return (
            <Box sx={{py: 2}} key={`title-${menuElement.label}`}>
              <Typography
                variant='subtitle1'
                sx={{fontWeight: 700, textTransform: "uppercase"}}
              >
                {menuElement.label}
              </Typography>
              {menuElement.link.map((submenuElement) => {
                return (
                  <Box key={`link-${submenuElement.label}`}>
                    <Link
                      underline='none'
                      variant='subtitle1'
                      component='a'
                      sx={{
                        cursor: "pointer",
                        "&:hover": {color: "error.main"},
                      }}
                      onClick={navigateTo(submenuElement.link)}
                      dangerouslySetInnerHTML={{__html: submenuElement.label}}
                    />
                  </Box>
                );
              })}
            </Box>
          );
        })}
        <Box sx={{w: 1, textAlign: "center"}}>
          <Link
            component='a'
            onClick={navigateTo("/contact")}
            sx={{cursor: "pointer"}}
          >
            <MailIcon
              fontSize='large'
              color='primary'
              sx={{"&:hover": {color: "error.main"}}}
            />
          </Link>
        </Box>
      </SwipeableDrawer>
    ) : (
      <ClickAwayListener onClickAway={handleClose}>
        <Stack
          direction='row'
          spacing={4}
          alignItems='start'
          sx={{borderTop: 2, pt: 2}}
        >
          <Grid container spacing={3}>
            {menu.map((menuElement) => {
              return (
                <Grid item key={`submenu-${menuElement.label}`}>
                  <Stack>
                    <Typography
                      variant='subtitle1'
                      sx={{fontWeight: 700, textTransform: "uppercase"}}
                    >
                      {menuElement.label}
                    </Typography>
                    {menuElement.link.map((submenuElement) => {
                      return (
                        <Link
                          key={`submenuLink-${submenuElement.label}`}
                          underline='none'
                          variant='subtitle1'
                          component='a'
                          sx={{
                            cursor: "pointer",
                            "&:hover": {color: "error.main"},
                          }}
                          onClick={navigateTo(submenuElement.link)}
                          dangerouslySetInnerHTML={{
                            __html: submenuElement.label,
                          }}
                        />
                      );
                    })}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </ClickAwayListener>
    )
  ) : null;
};

export default SubMenu;
