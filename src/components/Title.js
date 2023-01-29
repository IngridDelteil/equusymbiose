import {Typography} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const Title = ({children, banniere = null, banniereAlt = ""}) => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {banniere !== null ? (
        <img
          src={banniere}
          alt={banniereAlt}
          width='100%'
          style={{display: mobileDevice ? "none" : "block"}}
        />
      ) : null}
      <Typography
        component='h1'
        variant='h6'
        color='error.main'
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          textAlign: "center",
          mb: 2,
          mt: {md: 2},
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default Title;
