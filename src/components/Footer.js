import {useNavigate} from "react-router-dom";
import {Link, Stack, Typography} from "@mui/material";

const Footer = () => {
  const navigate = useNavigate();
  const navigatoTo = (link) => () => {
    navigate(link);
  };
  return (
    <Stack
      component='footer'
      direction='row'
      alignItems='center'
      spacing={1}
      justifyContent='center'
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "secondary.main",
        padding: 0.5,
      }}
    >
      <Link
        color='background.main'
        variant='body2'
        underline='none'
        sx={{
          textTransform: "uppercase",
          "&:hover": {color: "info.main", cursor: "pointer"},
        }}
        onClick={navigatoTo("/mentions")}
      >
        Mentions
      </Link>
      <Typography color='background.main' variant='body2'>
        -
      </Typography>
      <Link
        color='background.main'
        variant='body2'
        underline='none'
        href='https://www.softinmedia.fr'
        target='_blank'
        sx={{
          textTransform: "uppercase",
          "&:hover": {color: "info.main", cursor: "pointer"},
        }}
      >
        Conception Softin'Media
      </Link>
    </Stack>
  );
};

export default Footer;
