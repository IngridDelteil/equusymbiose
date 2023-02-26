import {Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Section = ({
  children,
  order = "row",
  picture = null,
  pictureAlt = "",
  pictureBorder = true,
}) => {
  const theme = useTheme();
  const borderDetails = {
    border: 2,
    borderStyle: "solid",
    borderColor: theme.palette.error.main,
    boxSizing: "border-box",
  };
  return (
    <Grid container direction={order} alignItems='center' sx={{marginY: 4}}>
      {picture !== null ? (
        <Grid item xs={12} md={6} lg={5}>
          <img
            src={picture}
            alt={pictureAlt}
            width='100%'
            style={pictureBorder ? borderDetails : null}
          />
        </Grid>
      ) : null}
      <Grid
        item
        xs={12}
        md={6}
        lg={7}
        sx={{backgroundColor: "background.main", p: 4}}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default Section;
